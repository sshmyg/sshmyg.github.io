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

    const response = await fetch(`https://www.tiktok.com/api/comment/list/?${qs}`);

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
      console.log(error.message);
    }
  };

  const formNode = document.querySelector('.js-form');

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

    const result = await findWinner({ videoId });

    console.log(result);
  });
})();
