(() => {
  const qsStringify = (obj) => {
    const res = Object.entries(obj).reduce((acc, [key, value]) => {
      acc.push(`${key}=${value}`);

      return acc;
    }, []);

    return res.join('&');
  };

  const getComments = async ({ count, cursor, videoId }) => {
    const qs = qsStringify({
      count,
      cursor,
      aweme_id: videoId,
      aid: '1988',
    });

    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.tiktok.com/api/comment/list/?${qs}`);

    return response.json();
  };

  const getPagination = ({ commentNumber }) => {
    const count = 20;

    if (commentNumber <= count) {
      return {
        count,
        cursor: 0,
        commentIndex: commentNumber - 1,
      };
    }

    return {
      count,
      cursor: Math.ceil(commentNumber / count) * count,
      commentIndex: (commentNumber % count) - 1,
    };
  };

  const findWinner = async ({ videoId }) => {
    try {
      const total = (await getComments({ count: 20, cursor: 0, videoId }))?.total;

      const commentNumber = Math.floor(Math.random() * (total - 1 + 1) + 1);

      const { commentIndex, ...pagination } = getPagination({ commentNumber });

      const result = await getComments({ ...pagination, videoId });

      const comment = result.comments?.[commentIndex];

      if (!comment) {
        throw Error('Can not find comment');
      }

      const nickname = comment.user.nickname;
      const unique_id = comment.user.unique_id;

      return {
        commentNumber,
        total,
        pagination,
        cursor: result.cursor,
        commentIndex,

        text: comment.text,
        nickname,
        unique_id,
        userLink: `https://www.tiktok.com/@${unique_id}`,
      };
    } catch (error) {
      console.log(error);
      alert(`Сталась помилка, зверніься до служби підтримки: ${error.message}`);
    }
  };

  const formNode = document.querySelector('.js-form');
  const loaderNode = document.querySelector('.js-loader');
  const listNode = document.querySelector('.js-list');
  const hideClass = 'hide';

  formNode.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(formNode);
    const url = formData.get('url');
    const videoId = url.replace('https://www.tiktok.com/', '').split('?')[0].split('/').at(-1);

    if (!videoId) {
      alert(`Здається урл не вірний, перевірте`);
      console.log(videoId);
      return;
    }

    loaderNode.classList.remove(hideClass);

    const result = await findWinner({ videoId });

    loaderNode.classList.add(hideClass);
    listNode.classList.remove(hideClass);

    document.querySelector('.js-comment-index').innerText = result.commentNumber;
    document.querySelector('.js-comment-text').innerText = result.text;
    document.querySelector('.js-username').innerText = result.nickname;
    document.querySelector('.js-profile-link').innerText = result.unique_id;
    document.querySelector('.js-profile-link').href = result.userLink;

    console.log(result);
  });
})();
