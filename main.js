/*! For license information please see main.js.LICENSE.txt */
(self.webpackChunkdashv4 = self.webpackChunkdashv4 || []).push([
  [179],
  {
    33438: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(22928),
        i = (n(67294), n(6339)),
        o = n(9216),
        a = n(68718),
        s = JSON.parse(
          '{"general":{"leave":"Leave","error":"Error","warning":"Warning","success":"Success","info":"Info","dataset":"Dataset","countries":"Countries","platforms":"Platforms","settings":"Settings","changePassword":"Change password","emailReports":"Email reports","apiDocumentation":"API documentation","help":"Help","logOut":"Log out","terms":"Terms and conditions","save":"Save","master":"Master","confirm":"Confirm","ok":"Ok","cancel":"Cancel","apply":"Apply","loading":"Loading","or":"Or","createNewVersion":"Create as new version","setAsMaster":"Set as master","none":"None","addFilter":"+ Add filter","chooseValues":"Choose values","delete":"Delete","export":"Export","search":"Search","other":"Other","pagination":"<bold>{{start}} - {{end}}</bold> of <bold>{{total}}</bold>","showing":"Showing","results":"results","all":"All","groups":"Groups","selected":"Selected","submit":"Submit","id":"Id","resetToDefault":"Reset to default","download":"Download","back":"Back","group":"Group","tvbeat":"TVBeat","showMore":"Show more","showLess":"Show less","exporting":"Exporting","daysOfWeek":"Days of week","customDateRange":"Custom date range","today":"Today","tomorrow":"Tomorrow","yesterday":"Yesterday","last7days":"Last 7 days","last30days":"Last 30 days","monthToDate":"Month to date","lastMonth":"Last month","last3Months":"Last 3 months","last12Months":"Last 12 months","weekToDate":"Week to date","lastWeek":"Last week","yearToDate":"Year to date","next7Days":"Next 7 days","nextWeek":"Next week","next30days":"Next 30 days","next90days":"Next 90 days","nextMonth":"Next month","monday":"Monday","mondayShort":"Mo","tuesday":"Tuesday","tuesdayShort":"Tu","wednesday":"Wednesday","wednesdayShort":"We","thursday":"Thursday","thursdayShort":"Th","friday":"Friday","fridayShort":"Fr","saturday":"Saturday","saturdayShort":"Sa","sunday":"Sunday","sundayShort":"Su","days":"Days","week":"Week","metrics":"Metrics","intervals":"Intervals","both":"Both","hours":"Hours","minutes":"Minutes","options":"Options","bottom":"BOTTOM","top":"TOP","saved":"saved","custom":"custom","excel":"Excel","exclude":"Exclude","allExcept":"All except:","pdf":"Pdf","AND":"AND","OR":"OR","from":"From","to":"To","moreThan":"More than","lessThan":"Less than","switchUserGroup":"Switch user group","clickToFilter":"Click to filter data","barChart":"Bar chart","lineChart":"Line chart","emptyDescription":"No data to display. Try adjusting filters.","edit":"Edit","metadata":"Metadata","exportToPdf":"Export to PDF","exportToXls":"Export to Excel","version":"Version","date":"Date","yes":"Yes","userGroup":"User group","refresh":"Refresh","moreInfo":"More info","yesDelete":"Yes, delete it","goBack":"Go back","searchFor":"Search for","default":"default","makeDefault":"Make default"},"modals":{"modalDownload":{"title":"Your export is ready!","content":"Click the Download button to download the exported file."},"userGroupWarning":{"title":"User group access","content-part-1":"The URL you are trying to open belongs to the a user group which you are not part of.","content-part-2":"Please be aware that the query results may not be the same as in the shared URL, due to different settings and global filters. The URL may not even open properly.","details":"If required, confirm the user group name with the person who has shared this URL and contact your admin to get an access."}},"dataset":{"datasetInfo":"Dataset info","lastProcessedTitle":"Last processed date for current data","lastProcessedContent":"This date represents the latest day of data that was processed and is available to use in the dashboard. The frequency of how often the data is processed and when it is available in the dash can differ depending on the dataset.","globalFiltersTitle":"Global filters","globalFiltersContent":"Global filters are applied as default across all data queries in the dashboard. This means that the data displayed in the  Research, Reports & Indexing modules, have those default filters applied automatically. These can be overridden where necessary - please contact us for more information.","campaignMetadataFiltersTitle":"Campaign metadata filters","campaignMetadataFiltersContent":"These filters are applied on all campaign related data queries in the Campaign module and it\'s related reports.","cumulativeMetricsTitle":"Cumulative metrics","cumulativeMetricsContent":"Switch to cumulative metrics - Cumulative metrics capture viewing from the start of the query to the selected interval."},"helper":{"contactSupport":"Contact support","gettingStarted":"Getting started","skyMediaDocumentation":"SKY Media documentation","developerDocs":"Developer docs","tc":"Terms & Privacy","signIn":"Sign in"},"filter":{"addToGroup":"Add to group","addToExistingGroup":"Add to existing group","createNewGroup":"Create a new group","confirmGroupDeleteContent":"Are you sure you want to remove this group?","customInterval":"Custom interval"},"errors":{"common":"Some error occurred","required":"Field required","idsExist":"Group with those id\'s already exist","number":"Numbers only","wrong":"Something went wrong!","globalDescription":"An error occurred. Please try refreshing the page! If the problem persists contact support.","notFound":"Oops! Page not found.","notFoundDescription":"We can’t seem to find the page you are looking for. "},"nav":{"inventoryManagement":"Inventory Management","audienceManagement":"Audience Measurement","reports":"Reports","historical":"Historical","operationalReports":"Operational reports","campaigns":"Campaigns","research":"Research","exporter":"Exporter","audiences":"Audiences","budgeting":"Budgeting","forecasting":"Forecasting","forecastManagement":"Forecast management","versions":"Versions","home":"Home","live":"Live","indexing":"Indexing","contentEvaluation":"Content evaluation","packageReport":"Package report","contentProviderReport":"Content provider report","subscriberReport":"Subscriber report","testReport":"Test report","showcaseReport":"Showcase report","sellThroughRate":"Sell through rate","customChartWidgets":"Custom chart widgets","timeSeriesTable":"Time series table","widgetTestReport":"Widget test report","budgetReports":"Budget reports","proposals":"Proposals","bookedCampaigns":"Booked campaigns"},"forecasting":{"editForecastParams":"Edit Forecast Params","openInResearch":"Open in research","upcomingDays":"Upcoming {{counter}} days","forecastRange":"Upcoming {{upcoming}} Days ({{dayFrom}} - {{dayTo}})","totalInventory":"Total Inventory","totalForSelectedAlterations":"$t(forecasting.totalInventory) for Selected Alterations","forecastAlterations":"Forecast alterations","addAlteration":"Add alteration","reCalculate":"Re-calculate","alteration":"Alteration","parameters":"Parameters","owner":"Owner","dateModified":"Date modified","include":"Include","ownerDateModified":"Owner/date modified","includeInForecast":"Include in forecast","alterationsDefaultName":"Alteration #{{index}}","sizeOfChange":"Size of change","dateRange":"Date range","filters":"Filters","confirmDeleteAlteration":"Are you sure you want to delete this alteration?","editAlteration":"Edit alteration","editAlterationMessage":"Please click the \'Re-calculate\' button to include this alteration in the forecast.","forecastSettings":"Forecast settings","dimensions":"Dimensions","measure":"Measure","saveVersion":"Save version","version":"Forecast version","compareVersion":"Compare version","query":"Query","filterDescription":"Choose your filters and click \\"+ Apply\\"","confirmDeleteVersion":"Are you sure you want to delete this version?","exportSuccessTitle":"Your export is ready","exportSuccessMessage":"Click <a href=\\"{{link}}\\">here</a> to download it.","exportErrorTitle":"Your export failed","exportErrorMessage":"The exporting process failed. Please try again. If the problem persists, contact our customer service and we will look into it.","newForecast":"New forecast","capacity":"Capacity (F)","reset":"Reset","edit":"Edit forecast","export":"Export","editParams":"Edit forecast parameters","openResearch":"Open in Research","delete":"Delete forecast","save":"Save forecast","outdatedMessage":"Please Save to re-calculate the forecast based on changed parameters.","recalculatingInProgressMessage":"Re-calculating the forecast","recalculatingInProgressDescription":"We are preparing the new forecast based on selected parameters. This might take a few minutes.","masterSetTitle":"Set this forecast as Master?","masterSetContent":"<p>You are about to set this forecast version as a Master version.</p> <p>Confirmation will have impact on the following items:</p> <ul> <li>Forecasted capacity numbers</li> <li>Forecasted delivered impressions</li> <li>Forecasted Fill rate</li> <li>Forecasted campaign delivery and the campaign end date</li> </ul> <p>Update will take around 10mins, once confirmed.</p> <p>Would you like to proceed?</p>","newForecastVersion":"New forecast version","versionName":"Forecast version name","copyVersion":"Copy from this forecast version","alterationQuery":"Alteration query","overviewTitle":"Forecast version overview","compare":"Compare","vs":"vs.","paramsTitle":"Forecast parameters","deleteAlterationTitle":"Delete this alteration?","deleteAlterationConfirmContent":"Are you sure you want to delete this alteration?","deleteVersionTitle":"Delete this forecast version?","deleteVersionConfirmContent":"Are you sure you want to delete this forecast version?","noAlteration":"No alteration added","resetTitle":"Reset changes?","resetContent":"Changes you made to the version so far will not be saved.","saveTitle":"This might take a while!","saveContent":"<p>Applying new parameters and alterations to the forecast will take couple of minutes.</p><p>Would you like to proceed?</p>","newVersionWarning":"You have pending changes which will be lost if you proceed to create a new forecast version.","setMasterWarning":"You have pending changes which will be automatically saved if you proceed.","leaveTitle":"Leave without saving?","leaveContent":"Changes you made to the version so far will not be saved."},"forms":{"email":"Email","password":"Password","name":"Name","title":"Title","description":"Description","query":"Query","dateRange":"Date range","deltaKey":"Size of change","metric":"Metric","metricPlaceholder":"Select metric","deltaValue":"Value","deltaValuePlaceholder":"e.g. 10000","alterationType":"Forecast alteration type","primary":"Primary","secondary":"Secondary","editQuery":"Edit query","versionName":"Version name","setAsMaster":"Set this version as <strong>Master</strong>"},"campaigns":{"campaigns":"Campaigns","placements":"Placements","creatives":"Creatives","operator":"Operator","overview":"Overview","starts":"Starts in","ends":"Ends in","interval":"Active in","exportCampaigns":"Export campaigns","exportPlacements":"Export placements","exportCreatives":"Export creatives","campaignReport":"Campaign report","placementReport":"Placement report","extReport":"Ext. report","moreInfo":"More info","moreInfoFor":"More info for","active":"Active","in_active":"Inactive","cancelled":"Cancelled","completed":"Completed","testing":"Testing","emptyMessage":"No results to display. Please adjust your filters to get more results.","manageColumnsDescription":"Toggle campaign attributes and sort them via drag and drop","metricsAndMetadata":"Metrics / Metadata","goToFullReport":"Go to full report","impression":"Impressions","nameContains":"<strong>{{type}} name</strong> contains","smartView":"Smart view","manageColumns":"Manage columns","clearCheckedRows":"Clear checked rows","view":"Overview","selected":"Selected","all":"All","allAbove":"All above","forecastedImpressions":"Forecasted Impressions","targetImpressions":"Target Impressions","cpm":"CPM","forecastCompletionDate":"Forecast completion date","reportsDescription":"Booked Campaign report","name":"Name","progress":"Progress","elapsedTime":"Elapsed time","columns":{"reach":"Reach #","frequency":"Freq.","impression":"Served Imp.","osi":"OSI","progress_percent":"Progress","elapsed_time_percent":"Elapsed time","ad":{"advertiser":"Advertiser","client_type":"Client type","client_name":"Client name","prod_name":"Product name","agency":"Agency","d5_targetedaud":"Target audience","prod_gclsh":"Clash groups","prod_clsh":"Clash code"},"campaign":{"name":"$t(campaigns.campaigns)","cmpgn_status":"Status","budget":"Budget","target_imp":"Target Imp.","start_date":"Start date","end_date":"End date","cpt":"CPM","ffdr":"FFDR","forecasted_impressions":"Forecasted Imp.","forecasted_completion":"Forecasted Comp. Date","exinv":"Excess inventory"},"placement":{"name":"$t(campaigns.placements)","plac_status":"$t(campaigns.columns.campaign.cmpgn_status)","budget":"$t(campaigns.columns.campaign.budget)","target_imp":"$t(campaigns.columns.campaign.target_imp)","start_date":"$t(campaigns.columns.campaign.start_date)","end_date":"$t(campaigns.columns.campaign.end_date)","cpt":"$t(campaigns.columns.campaign.cpt)","ffdr":"$t(campaigns.columns.campaign.ffdr)","forecasted_impressions":"$t(campaigns.columns.campaign.forecasted_impressions)","forecasted_completion":"$t(campaigns.columns.campaign.forecasted_completion)","prim_traf":"Primary trafficker","sales_person":"Salesperson","cmpgn_exinv":"$t(campaigns.columns.campaign.exinv)","delivery_pacing_point":"Priority","delivery_pacing":"Pacing","countries_constraints":"Countries constraints","audience_constraints":"Audience constraints"},"creative":{"name":"$t(campaigns.creatives)"}},"modalGroups":{"createTitle":"Add to group","editTitle":"Edit group"},"groups":{"general":"General","delivery":"Delivery","targeting":"Targeting","pricing":"Pricing","forecast":"Forecast"},"warnings":{"placement":"Missing Placement","creative":"Missing Creative","placementAndCreative":"Missing Placement and Creative"}},"apps":{"tabs":{"overview":"Overview","channels":"Channels","devices":"Devices","mediaPartners":"Media Partners","content":"Content"},"dateRanges":{"pastDays":"Past 7 days","pastWeeks":"Past weeks","pastMonths":"Past months"},"exportWidget":"Export widget","exportAll":"Export all","noConfig":"There is no config for such application","totals":"Grand Total","filters":"Filters","noFilters":"No filters","dateRange":"Date range","metrics":"Metrics","total":"Total","widgetLoadError":"Failed to load widget"},"research":{"compare":"compare","createAudience":"Create new audience","allAudience":"All audience","chartType":"Chart type","avg":"avg","enableAvg":"Enable / disable averages for each series","trend":"Trend","averages":"Averages","none":"None","enableTrend":"Enable / disable trend for each series","trendTitle":"Trendlines","trendSubtitle":"Toggle trendline & averages","includeGroupsTitle":"Include Groups","includeGroupsSubtitle":"Include groups in the results","onlyGroups":"Only Groups","onlyValues":"Only {{dimensionName}}","addMetricsSubtitle":"Add and order metrics in table","editMetrics":"Edit metrics","formatNumbersTitle":"Format numbers","formatNumbersSubtitle":"Toggle format or unformatted numbers","durationTitle":"Duration metrics format","durationSubtitle":"Format duration metrics to minutes or hours","selectMetricsTitle":"Add/Order metrics in Table","selectMetricsSubtitle":"Select Metrics that you want to appear in the table. Drag & Drop to change the order in which the metrics appear in the table.","pagination":"results","dataLabelsTitle":"Data Labels","dataLabelsSubtitle":"Show data labels on data points","empty":"Select what you want to <bold>compare</bold>, chose a <bold>date range</bold>, add optional <bold>filters</bold> and click the <bold>Submit</bold> button","customAudience":"Custom audience","comparisonSummary":"{{topOrBottom}} {{dimensionLabel}} for {{fromDate}} - {{toDate}} ({{intervalLabel}})","comparisonSummaryShort":"{{topOrBottom}} {{dimensionLabel}} for {{fromDate}} {{toDate}} {{intervalLabel}}","comparisonSummaryBookmark":"Comparing: {{topOrBottom}} {{dimensionLabel}} for ({{intervalLabel}})","filtersTitle":"We are not able to show data for the selected filters.","filtersSubTitle":"Please try refreshing the page or choose different filters.","aggregationTitle":"To comply with privacy rules, audiences with reach less than <bold>{{number}}</bold> cannot be calculated. For more information please contact your administrator.","aggregationSubTitle":"Please try increasing the audience size of this query.","otherSubtitle":"\'We are looking into this and will make it available as soon as possible","trendForLine":"<bold>Trend line for</bold> {{label}}","avgForLine":"<bold>Avg.</bold> per <bold>{{interval}}</bold> for {{label}}","bookmarksTitle":"Your bookmarks","bookmarksPlaceholder":"Enter Bookmark title","confirmBookmarkDelete":"Are you sure you want to delete this bookmark?","audience":{"selectYourAudience":"Select your <bold>Audience</bold>","numberOfSubscribers":"<bold>{{size}}</bold>","percentOfSubscribers":"<bold>{{percent}}% - </bold>","calculating":"Calculating...","selectFilters":"Select the Audience filters below","addAudience":"+ Add <bold>Audience</bold>","fileSize":"File size: ","subscribersSize":"Num. of subscribers: ","dateRange":"Date range:","invert":"Invert","lessThanAggregation":"< than {{number}} users","subscribers":"subscribers"},"table":{"moreResults":"There are {{numberOfValuesWithZero}} more results of which metrics are 0. <clickable>Click</clickable> to display all the results. "},"export":{"chartAndTable":"Export chart and table","chart":"Export chart","table":"Export table"},"modalExport":{"title":"Your export has started","subtitle":"The exporting process has successfully started. The file may take some time to generate. You will be able to download it when it&apos;s done."},"metadataSubTitle":"Include metadata columns","airTime":"Air time","title":"Research","subtitle":"Filter and drill down into data"},"tooltips":{"reach":{"title":"Subscriber #","message":"The total number of Subscriber IDs viewing. Capping and zapping methodology for validating viewing sessions can be found in the help section in the top right menu in the dashboard."},"reachPercent":{"title":"Subscriber %","message":"The total number of Subscriber IDs viewing, as a percentage of the total universe or target audience."},"rating":{"title":"Rating","message":"The average number of Subscriber IDs viewing at any given moment."},"ratingPercent":{"title":"Rating %","message":"The average number of Subscriber IDs viewing at any given moment, as a percentage of the total universe or target audience."},"averageDuration":{"title":"Average Duration","message":"\\n                <div style=\\"display: flex;\\">\\n                    <div style=\\"\\">\\n                        <p>The average viewing duration per reached viewer.</p>\\n                        <p>The average duration is calculated based on the selected interval of the query which can be: Minute, Hour, Day, Total etc.</p>\\n                        <p>Example: If i select the <strong>Week</strong> interval my average duration will be an average duration <strong>per week</strong>.</p>\\n                        <p><a href=\\"https://tvbeat.snazzydocs.com/docs/123.0/data-and-metrics?u=tvbeat&p=private#duration-metrics\\" target=\\"_blank\\">READ MORE</a></p>\\n                    </div>\\n                    <div style=\\"flex: 0 0 92px; margin-left: 12px;\\">\\n                        <img src=\\"{{avgDurationImg}}\\" style=\\"width: 100%;\\" />\\n                    </div>\\n                </div>\\n                "},"avgDurAll":{"title":"Average Duration All","message":"The average viewing duration across all Viewers."},"share":{"title":"Share","message":"Viewing duration as a percentage of all viewing."},"totalDuration":{"title":"Total Duration","message":"The total viewing time."},"ireach":{"title":"Incremental Reach #","message":"Unique number of households that have viewed a specified time period of a given channel in a specific interval but they havent watched in a previous interval."},"ireachPercent":{"title":"Incremental Reach %","message":"Incremental reach # expressed in %."},"osn-reach":{"title":"Reach #","message":"The total number of Subscriber IDs viewing."},"osn-reachPercent":{"title":"Reach %","message":"The total number of Subscriber IDs viewing, as a percentage of the total universe or target audience."},"osn-dreach":{"title":"Device reach #","message":"Number of unique devices that were used by users to view a specified time period (>0 sec) of a given channel over another, broader specified time period."},"osn-ratingPercent":{"title":"GRP %","message":"The average number of Subscriber IDs viewing at any given moment, as a percentage of the total universe or target audience."},"osn-avgDurAll":{"title":"ATS","message":"The average viewing duration across the total universe or target audience."},"croatia-reach":{"title":"Reach","message":"The total number of Viewers viewing. Capping and zapping methodology for validating viewing sessions can be found in the help section in the top right menu in the dashboard."},"croatia-reachPercent":{"title":"Reach %","message":"The total number of Viewers viewing, as a percentage of the total universe or target audience."},"slovenia-reach":{"title":"Reach","message":"The total number of Viewers viewing. Capping and zapping methodology for validating viewing sessions can be found in the help section in the top right menu in the dashboard."},"slovenia-reachPercent":{"title":"Reach %","message":"The total number of Viewers viewing, as a percentage of the total universe or target audience."},"uk-reach":{"title":"Reach","message":"The total number of Viewers viewing. Capping and zapping methodology for validating viewing sessions can be found in the help section in the top right menu in the dashboard."},"uk-reachPercent":{"title":"Reach %","message":"The total number of Viewers viewing, as a percentage of the total universe or target audience."},"uksky-reach":{"title":"Reach","message":"The total number of Viewers viewing. Capping and zapping methodology for validating viewing sessions can be found in the help section in the top right menu in the dashboard."},"uksky-reachPercent":{"title":"Reach %","message":"The total number of Viewers viewing, as a percentage of the total universe or target audience."},"croatia-rating":{"title":"Rating","message":"The average number of Subscriber IDs viewing at any given moment."},"croatia-ratingPercent":{"title":"Rating %","message":"The average number of Subscriber IDs viewing at any given moment, as a percentage of the total universe or target audience."},"slovenia-rating":{"title":"Rating","message":"The average number of Subscriber IDs viewing at any given moment."},"slovenia-ratingPercent":{"title":"Rating %","message":"The average number of Subscriber IDs viewing at any given moment, as a percentage of the total universe or target audience."},"uk-rating":{"title":"Rating","message":"The average number of Subscriber IDs viewing at any given moment."},"uk-ratingPercent":{"title":"Rating %","message":"The average number of Subscriber IDs viewing at any given moment, as a percentage of the total universe or target audience."},"uksky-rating":{"title":"Rating","message":"The average number of Subscriber IDs viewing at any given moment."},"uksky-ratingPercent":{"title":"Rating %","message":"The average number of Subscriber IDs viewing at any given moment, as a percentage of the total universe or target audience."},"sky_media-impression":{"title":"Impression #","message":"The number of impressions served by FreeWheel."},"sky_media-impressionPercent":{"title":"Impression %","message":"The number of impressions served, as a percentage of the total number of impressions served by FreeWheel."},"sky_media-moc":{"title":"Missed Opportunities","message":"The total number of impressions which were available and have not been filled."},"sky_media-pc":{"title":"Total Inventory","message":"Total number of opportunities that are available to be served."},"sky_media-fillRate":{"title":"Fill Rate %","message":"The number of Freewheel impressions served, as a percentage of total inventory."},"sky_media-reach":{"title":"Reach","message":"The number of unique users (All Sky platforms use Sky’s CustomerVisitorID , Opted out customers and non-sky platforms use FreeWheel’s UniqueIdentiferID)."},"sky_media-frequency":{"title":"Frequency","message":"The average number of impressions viewed per unique user."},"sky_media-rch_factor":{"title":"Reach Factor","message":"The factor by which each unique user is scaled, to account for impressions with no unique user ID."},"sky_media-revenue_g":{"title":"Gross Value","message":"The total gross value calculated by multiplying the FreeWheel served impressions by the eCPM across any dimension."},"sky_media-ecpm_g":{"title":"ECPM","message":"The effective CPM calculated by taking the average Gross CPM from all campaigns within the chosen dimensions."},"canalplus-reach":{"title":"Reach #","message":"The total number of Subscriber IDs viewing. Capping and zapping methodology for validating viewing sessions can be found in the help section in the top right menu in the dashboard."},"canalplus-reachPercent":{"title":"Reach %","message":"The total number of Subscriber IDs viewing, as a percentage of the total universe or target audience."},"canalplus-dreach":{"title":"Device Reach","message":"Number of unique devices that were used by users to view a specified time period (>0 sec) of a given channel over another, broader specified time period."},"canalplus-rating":{"title":"Rating","message":"\\n                    <p>The Rating metric counts the average number of users that were watching each second.</p>\\n                    <p>This is calculated by taking Total Duration and dividing it by the selected time period of the query.</p>\\n                    <p>For example, if you have a Total Duration of 24000 hours and time period of 1 day (24 hours), then the Rating would be 1000. (24000/24)</p>\\n                "},"canalplus-ratingPercent":{"title":"Rating %","message":"\\n                    <p>The Rating Percent metric takes the Rating value and shows it as a percentage of the Universe value for that query.</p>\\n                    <p>If the query also uses a Target Audience, then the size of this audience will be used instead of the Universe.</p>\\n                "},"canalplus-share":{"title":"Share","message":"\\n                    <p>Viewing duration in the chosen period as a percentage of all viewing in the period.</p>\\n                    <p>Share takes the Total Duration value for each item and divides it by Total Duration value in row \\"All\\".</p>\\n                    <p>For example, if one channel has 1000 hours Total Duration, and the \\"All\\" row has 10000 hours, then the share for that channel will be 10%.</p>\\n                "},"canalplus-shareOnContent":{"title":"Content Share","message":"\\n                    <p>Content Share of each content is total duration for the content divided by the total duration of all viewing in the airtime of the content.</p><br>\\n                    <p>Content Share is only available for Live content (filter by Live Mode), and is only calculated at an Emission level (select Content interval\\n                    from the interval picker).</p>\\n                    <p><a href=\\"https://tvbeat.atlassian.net/wiki/spaces/CAN/pages/418742295/Share+And+Content+Share\\" target=\\"_blank\\">READ MORE</a></p>\\n                 "},"canalplus-ratingOnContent":{"title":"Content Rating","message":"\\n                    <p>Content Rating is calculated as: <i>Total duration / duration of content</i></p><br>\\n                    <p>Content Rating is only available for Linear content (excluding On Demand content), and is only calculated at an Emission level (select Content interval from the interval picker).</p>\\n                    <p><a href=\\"https://tvbeat.atlassian.net/wiki/spaces/CAN/pages/418578439/Rating+Percent+and+Content+Rating\\" target=\\"_blank\\">READ MORE</a></p>\\n                "},"canalplus-freq":{"title":"Frequency","message":"\\n                    <p>Frequency is calculated as <i>Views / Reach</i></p>\\n                    <p><a href=\\"https://tvbeat.atlassian.net/wiki/spaces/CAN/pages/970227770/Views+Frequency\\" target=\\"_blank\\">READ MORE</a></p>\\n                "},"canalplus-stream":{"title":"Views","message":"\\n                    <p>Views count the number of sessions.</p>\\n                    <p><a href=\\"https://tvbeat.atlassian.net/wiki/spaces/CAN/pages/970227770/Views+Frequency\\" target=\\"_blank\\">READ MORE</a></p>\\n                "},"proximus-reach":{"title":"Device Reach #","message":"The total number of Devices viewing. Capping and zapping methodology for validating viewing sessions can be found in the help section in the top right menu in the dashboard."},"proximus-reachPercent":{"title":"Device Reach %","message":"The total number of Devices viewing, as a percentage of the total universe or target audience."},"proximus-rating":{"title":"Rating","message":"The average number of Device viewing at any given moment."},"proximus-ratingPercent":{"title":"Rating %","message":"The average number of Device viewing at any given moment, as a percentage of the total universe or target audience."},"proximus-averageDuration":{"title":"Average Duration","message":"The average viewing duration per reached Device."},"proximus-avgDurAll":{"title":"Average Duration All","message":"\\n                <div style=\\"display: flex;\\">\\n                    <div style=\\"\\">\\n                        <p>The average viewing duration across all Devices.</p>\\n                        <p>The average duration is calculated based on the selected interval of the query which can be: Minute, Hour, Day, Total etc.</p>\\n                        <p>Example: If i select the <strong>Week</strong> interval my average duration will be an average duration <strong>per week</strong>.</p>\\n                        <p><a href=\\"https://tvbeat.snazzydocs.com/docs/123.0/data-and-metrics?u=tvbeat&p=private#duration-metrics\\" target=\\"_blank\\">READ MORE</a></p>\\n                    </div>\\n                    <div style=\\"flex: 0 0 92px; margin-left: 12px;\\">\\n                        <img src=\\"{{avgDurationImg}}\\" style=\\"width: 100%;\\" />\\n                    </div>\\n                </div>\\n                "},"proximusfw-impression":{"title":"Impression #","message":"The number of impressions served by FreeWheel."},"proximusfw-impressionPercent":{"title":"Impression %","message":"The number of impressions served, as a percentage of the total number of impressions served by FreeWheel."},"proximusfw-mot":{"title":"Missed Opportunities","message":"The total number of impressions which were available and have not been filled."},"proximusfw-pt":{"title":"Capacity","message":"Total number of opportunities that are available to be served."},"proximusfw-fillRate":{"title":"Fill Rate %","message":"The number of Freewheel impressions served, as a percentage of total inventory."},"proximusfw-reach":{"title":"Reach","message":"The total number of unique subscriber IDs viewing."},"proximusfw-frequency":{"title":"Frequency","message":"The average number of impressions viewed per unique subscriber."},"proximusfw-rch_factor":{"title":"Reach Factor","message":"The factor by which each unique user is scaled, to account for impressions with no unique subscriber ID."},"proximusfw-revenue_g":{"title":"Revenue","message":"The total revenue (gross value) calculated by multiplying the FreeWheel served impressions by the Advertiser CPM across any dimension."},"proximusfw-ecpm_g":{"title":"Advertiser CPM","message":"The Advertiser CPM is effective CPM calculated by taking the average Advertiser CPM from all campaigns within the chosen dimensions."},"proximusfw-moleftadt":{"title":"Drop-Off","message":"This occurs when a user stops watching and closes the stream partway through a break. These opportunities will not be counted towards Unserved Inventory."},"proximusfw-monoadt":{"title":"Missed opportunities","message":"The total number of impressions which were available and have not been filled. These opportunities make up Unserved Inventory."},"advancedSearch":{"title":"Advanced Search","message":"<p><strong>Multi string and partial matching:</strong><br />ex.: “breaking s01” would match “<strong>Breaking</strong> Bad <strong>S01</strong>E04”</p><p><strong>“Starts with” matching (using ^ symbol):</strong><br />ex.: “^breaking” would match “<strong>Breaking</strong> Bad S01E04” or any value that starts with that search string.</p><p>Please note that the search string is NOT case sensitive and ignores diacritics.</p>"},"audienceInverse":{"message":"Inverts the audience selection"},"resetStuckExportsButton":{"message":"Set <strong>Failed</strong> status on exports that have a status <strong>In Progress</strong> or <strong>Waiting</strong>. This is used when exporter gets stuck because some exports fail to finalise."},"campaignLate":{"title":"Campaign started late!","message":"The create date of the campaign was less than 3 business days before the campaign start date."},"emission":{"title":"Content","message":"This interval will breakdown content by individual airings. The same content can have many airings which are marked by airtime"},"updateDimensionOrder":{"message":"Update Dimension Order"},"updateGroups":{"message":"Update Groups"},"campaign_label":{"title":"Campaign","message":"The campaign ID and campaign name taken from FreeWheel."},"sky_media-campaign_budget":{"title":"Budget","message":"The gross booked budget allocated to the campaign taken from Landmark."},"sky_media-campaign_cpm":{"title":"CPM","message":"The gross CPM of the campaign taken from Landmark."},"sky_media-campaign_reach":{"title":"Reach","message":"The number of unique users (All Sky platforms use Sky’s CustomerVisitorID , Opted out customers and non-sky platforms use FreeWheel’s UniqueIdentiferID)."},"sky_media-campaign_frequency":{"title":"Frequency","message":"The average number of impressions viewed per unique user."},"sky_media-campaign_servedImpressions":{"title":"Served Impressions","message":"The average number of impressions viewed per unique user."},"sky_media-campaign_targetImpressions":{"title":"Target Impressions","message":"The total number of impressions allocated to the campaign taken from FreeWheel."},"sky_media-campaign_elapsedTimePercentage":{"title":"Elapsed Time","message":"% of elapsed time between Start and End date"},"sky_media-campaign_progressPercentage":{"title":"Progress % / Delivered %","message":"Total delivered impressions for a active campaign expressed as a percentage using Served Impressions / Target Impressions."},"sky_media-campaign_osi":{"title":"OSI","message":"On Schedule Indicator indicates whether your campaign is on schedule."},"sky_media-campaign_ffdr":{"title":"FFDR","message":"A measure of how much budget the campaign is expected to deliver by the end of its dates. It is expressed as a percentage of its booked budget."},"sky_media-campaign_campaign.exinv":{"title":"Excess Inventory","message":"Excess Inventory taken from the FreeWheel API expressed as a percentage. This ensure a campaign paces ahead of its pacing curve."},"sky_media-campaign_createDate":{"title":"Create Date","message":"The date the campaign was created within Landmark."},"lastProcessedDate":{"title":"Last processed date for current data","message":"This date represents the latest day of data that was processed and is available to use in the dashboard. The frequency of how often the data is processed and when it is available in the dash can differ depending on the dataset."},"globalFilters":{"title":"Global filters","message":"Global filters are applied as default across all data queries in the dashboard. This means that the data displayed in the  Research, Reports & Indexing modules, have those default filters applied automatically. These can be overridden where necessary - please contact us for more information."},"campaignMetadataFilters":{"title":"Campaign metadata filters","message":"These filters are applied on all campaign related data queries in the Campaign module and it\'s related reports."},"cumulativeMetrics":{"title":"Cumulative metrics","message":"Switch to cumulative metrics - Cumulative metrics capture viewing from the start of the query to the selected interval."},"historicalDimension":{"message":"This dimension is based on <strong>historical metadata</strong>, and will filter only subscribers that had this meta value in the given time range, regardless of viewing behavior."},"intervals":{"message":"This interval will breakdown content by individual airings. The same content can have many airings which are marked by airtime"},"forecasted_impressions":{"title":"Forecasted Impressions","message":"A moving estimate of the expected impressions to be delivered for the campaign"},"forecasted_completion":{"title":"Forecasted Completion Date","message":"A moving estimate of the expected completion date for the campaign"}}}'
        );
      o.Z.use(a.Db).init({
        lng: 'en',
        fallbackLng: 'en',
        ns: ['translations'],
        defaultNS: 'translations',
        resources: { en: { translations: s } },
      });
      var l,
        u = o.Z;
      function c(e) {
        var t = e.children;
        return (0, r.Z)(
          i.a,
          { i18n: u },
          void 0,
          l ||
            (l = (0, r.Z)(
              'style',
              {},
              void 0,
              '\n          #root {\n            min-width: 100%;\n          }\n        '
            )),
          (0, r.Z)('div', { style: { padding: '1.25rem' } }, void 0, t)
        );
      }
      n.g.TVBEAT_SETTINGS = {
        timeZone: 'Europe/London',
        dateLocale: 'en-US',
        numberLocale: 'en-US',
        weekStart: 0,
      };
    },
    4102: function (e, t, n) {
      'use strict';
      var r,
        i = n(22928),
        o = n(67294),
        a = n(56032);
      t.Z = {
        Default: function () {
          return (
            r ||
            (r = (0, i.Z)(
              o.Fragment,
              {},
              void 0,
              (0, i.Z)(
                a.U,
                { title: 'Accordion title' },
                void 0,
                (0, i.Z)(
                  'p',
                  {},
                  void 0,
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                )
              ),
              (0, i.Z)('br', {}),
              (0, i.Z)('br', {}),
              (0, i.Z)(
                a.U,
                { defaultIsOpen: !0, title: 'Accordion title' },
                void 0,
                (0, i.Z)('p', {}, void 0, 'This accordion open by default')
              )
            ))
          );
        },
      };
    },
    56032: function (e, t, n) {
      'use strict';
      n.d(t, {
        U: function () {
          return c;
        },
      });
      var r = n(22928),
        i = n(70885),
        o = n(67294),
        a = n(69088),
        s = 'Accordion_accordion__1pwVk',
        l = 'Accordion_accordionTitle__2ftcc',
        u = 'Accordion_accordionContent__1N7EU',
        c = (0, o.forwardRef)(function (e, t) {
          var n = e.title,
            c = e.children,
            d = e.defaultIsOpen,
            m = void 0 !== d && d,
            p = (0, o.useState)(m),
            g = (0, i.Z)(p, 2),
            f = g[0],
            v = g[1],
            h = (0, o.useCallback)(function () {
              return v(function (e) {
                return !e;
              });
            }, []);
          return (
            (0, o.useImperativeHandle)(
              t,
              function () {
                return {
                  open: function () {
                    return v(!0);
                  },
                  close: function () {
                    return v(!1);
                  },
                };
              },
              []
            ),
            (0, r.Z)(
              'div',
              {
                className: s,
                'data-testid': 'id-accordion',
                'aria-expanded': f,
              },
              void 0,
              (0, r.Z)(
                'h3',
                {
                  'data-testid': 'id-accordion-header',
                  className: l,
                  onClick: h,
                },
                void 0,
                n,
                (0, r.Z)(a.J, {
                  color: '#000',
                  size: '0.75rem',
                  name: f ? 'icon-more-open' : 'icon-more-closed',
                })
              ),
              f
                ? (0, r.Z)(
                    'div',
                    { 'data-testid': 'id-accordion-content', className: u },
                    void 0,
                    c
                  )
                : null
            )
          );
        });
      c.displayName = 'Accordion';
    },
    4174: function (e, t, n) {
      'use strict';
      n.d(t, {
        U: function () {
          return r.U;
        },
      });
      var r = n(56032);
    },
    94373: function (e, t, n) {
      'use strict';
      var r,
        i = n(22928),
        o = (n(67294), n(34594));
      t.Z = {
        Default: function () {
          return (
            r ||
            (r = (0, i.Z)(
              o.x,
              {},
              void 0,
              (0, i.Z)(
                'p',
                {},
                void 0,
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
              )
            ))
          );
        },
      };
    },
    34594: function (e, t, n) {
      'use strict';
      n.d(t, {
        x: function () {
          return s;
        },
      });
      var r = n(22928),
        i = (n(67294), n(94184)),
        o = n.n(i),
        a = n(71364),
        s = function (e) {
          var t = e.children,
            n = e.className;
          return (0, r.Z)('div', { className: o()(a.Z.box, n) }, void 0, t);
        };
    },
    11402: function (e, t, n) {
      'use strict';
      var r,
        i,
        o,
        a,
        s,
        l = n(22928),
        u = n(67294),
        c = n(76373);
      t.Z = {
        Default: function () {
          return (
            r ||
            (r = (0, l.Z)(
              u.Fragment,
              {},
              void 0,
              (0, l.Z)(c.z, {}, void 0, 'Default')
            ))
          );
        },
        WithColors: function () {
          return (
            i ||
            (i = (0, l.Z)(
              u.Fragment,
              {},
              void 0,
              (0, l.Z)(c.z, {}, void 0, 'Default'),
              (0, l.Z)(c.z, { disabled: !0 }, void 0, 'Default'),
              (0, l.Z)('br', {}),
              (0, l.Z)('br', {}),
              (0, l.Z)(c.z, { color: 'primary' }, void 0, 'Primary'),
              '   ',
              (0, l.Z)(
                c.z,
                { disabled: !0, color: 'primary' },
                void 0,
                'Primary disabled'
              ),
              (0, l.Z)('br', {}),
              (0, l.Z)('br', {}),
              (0, l.Z)(c.z, { color: 'secondary' }, void 0, 'Secondary'),
              '   ',
              (0, l.Z)(
                c.z,
                { disabled: !0, color: 'secondary' },
                void 0,
                'Secondary disabled'
              ),
              (0, l.Z)('br', {}),
              (0, l.Z)('br', {}),
              (0, l.Z)(c.z, { color: 'danger' }, void 0, 'Danger'),
              '   ',
              (0, l.Z)(
                c.z,
                { disabled: !0, color: 'danger' },
                void 0,
                'Danger disabled'
              )
            ))
          );
        },
        WithVariant: function () {
          return (
            o ||
            (o = (0, l.Z)(
              u.Fragment,
              {},
              void 0,
              (0, l.Z)(c.z, { variant: 'outlined' }, void 0, 'Default'),
              (0, l.Z)('br', {}),
              (0, l.Z)('br', {}),
              (0, l.Z)(
                c.z,
                { color: 'primary', variant: 'outlined' },
                void 0,
                'Primary'
              ),
              (0, l.Z)('br', {}),
              (0, l.Z)('br', {}),
              (0, l.Z)(
                c.z,
                { color: 'secondary', variant: 'outlined' },
                void 0,
                'Secondary'
              ),
              (0, l.Z)('br', {}),
              (0, l.Z)('br', {}),
              (0, l.Z)(
                c.z,
                { color: 'danger', variant: 'outlined' },
                void 0,
                'Danger'
              )
            ))
          );
        },
        WithPolymorphicIcon: function () {
          return (
            a ||
            (a = (0, l.Z)(
              u.Fragment,
              {},
              void 0,
              (0, l.Z)(
                c.z,
                { as: 'a', href: 'https://google.com', variant: 'outlined' },
                void 0,
                'Default'
              ),
              (0, l.Z)('br', {}),
              (0, l.Z)('br', {}),
              (0, l.Z)(
                c.z,
                { as: 'div', color: 'primary', variant: 'outlined' },
                void 0,
                'Primary'
              )
            ))
          );
        },
        WithLoading: function () {
          return (
            s ||
            (s = (0, l.Z)(
              u.Fragment,
              {},
              void 0,
              (0, l.Z)(c.z, { isLoading: !0 }, void 0, 'Default'),
              (0, l.Z)('br', {}),
              (0, l.Z)('br', {}),
              (0, l.Z)(
                c.z,
                { isLoading: !0, color: 'secondary', variant: 'contained' },
                void 0,
                'Default'
              ),
              (0, l.Z)('br', {}),
              (0, l.Z)('br', {}),
              (0, l.Z)(
                c.z,
                { isLoading: !0, color: 'primary', variant: 'outlined' },
                void 0,
                'Primary'
              )
            ))
          );
        },
      };
    },
    76373: function (e, t, n) {
      'use strict';
      n.d(t, {
        z: function () {
          return g;
        },
      });
      var r,
        i = n(87462),
        o = n(22928),
        a = n(4942),
        s = n(45987),
        l = n(67294),
        u = n(94184),
        c = n.n(u),
        d = n(44957),
        m = {
          button: 'Button_button__3QF_k',
          loading: 'Button_loading__2Crim',
          outlined: 'Button_outlined__1slbo',
          primary: 'Button_primary__1mTxz',
          secondary: 'Button_secondary__2t2Od',
          danger: 'Button_danger__311uS',
          auto: 'Button_auto__1iaPx',
          small: 'Button_small__1zbeU',
          middle: 'Button_middle__3iswA',
          large: 'Button_large__3F305',
        },
        p = [
          'as',
          'color',
          'variant',
          'size',
          'className',
          'type',
          'isLoading',
          'children',
        ],
        g = function (e) {
          var t = e.as,
            n = e.color,
            u = e.variant,
            g = void 0 === u ? 'contained' : u,
            f = e.size,
            v = void 0 === f ? 'small' : f,
            h = e.className,
            b = e.type,
            y = e.isLoading,
            T = void 0 !== y && y,
            _ = e.children,
            M = (0, s.Z)(e, p),
            N = c()(
              m.button,
              h,
              m[n || ''],
              m[g],
              m[v],
              (0, a.Z)({}, m.loading, T)
            ),
            w = t || 'button';
          return l.createElement(
            w,
            (0, i.Z)({ 'data-testid': 'c-button' }, M, {
              type: t ? void 0 : b || 'button',
              className: N,
            }),
            T ? r || (r = (0, o.Z)(d.$, { color: 'currentColor' })) : _
          );
        };
    },
    64517: function (e, t, n) {
      'use strict';
      n.d(t, {
        z: function () {
          return r.z;
        },
      });
      var r = n(76373);
    },
    21201: function (e, t, n) {
      'use strict';
      var r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        d,
        m,
        p,
        g,
        f,
        v,
        h,
        b,
        y = n(70885),
        T = n(22928),
        _ = n(67294),
        M = n(47684),
        N = n(45901),
        w = n(74435),
        C = function () {
          return !0;
        },
        Z = {
          series: [{ type: 'line', data: [1, 2, 3] }],
          tooltip: {
            useHTML: !1,
            borderWidth: 0,
            padding: 0,
            shadow: !1,
            backgroundColor: 'transparent',
            style: { pointerEvents: 'auto' },
          },
        };
      t.Z = {
        WithSimpleChartsTooltip: function () {
          return (0, T.Z)(
            _.Fragment,
            {},
            void 0,
            r || (r = (0, T.Z)(N.a, { title: 'Chart title' })),
            i || (i = (0, T.Z)('br', {})),
            o || (o = (0, T.Z)('br', {})),
            a ||
              (a = (0, T.Z)(N.a, {
                title:
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet expedita dolores aspernatur quidem asperiores maiores quo consectetur ipsum hic voluptate deleniti id sapiente, voluptatem suscipit excepturi itaque minima. In, eaque?',
                description:
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet expedita dolores aspernatur quidem asperiores maiores quo consectetur ipsum hic voluptate deleniti id sapiente, voluptatem suscipit excepturi itaque minima. In, eaque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet expedita dolores aspernatur quidem asperiores maiores quo consectetur ipsum hic voluptate deleniti id sapiente, voluptatem suscipit excepturi itaque minima. In, eaque?',
              })),
            s || (s = (0, T.Z)('br', {})),
            l || (l = (0, T.Z)('br', {})),
            u ||
              (u = (0, T.Z)(N.a, {
                title: 'Chart title',
                description: 'Chart description',
              })),
            c || (c = (0, T.Z)('br', {})),
            d || (d = (0, T.Z)('br', {})),
            m ||
              (m = (0, T.Z)(N.a, {
                title: 'Chart title',
                description: 'Chart description',
                onClick: C,
              })),
            p || (p = (0, T.Z)('br', {})),
            g || (g = (0, T.Z)('br', {})),
            (0, T.Z)(N.a, {
              title:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet expedita dolores aspernatur quidem asperiores maiores quo consectetur ipsum hic voluptate deleniti id sapiente, voluptatem suscipit excepturi itaque minima. In, eaque?',
              list: [
                {
                  label:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet expedita dolores aspernatur quidem asperiores maiores quo consectetur ipsum hic voluptate deleniti id sapiente, voluptatem suscipit excepturi itaque minima. In, eaque?',
                  value: 'Value 1',
                },
              ],
            }),
            f || (f = (0, T.Z)('br', {})),
            v || (v = (0, T.Z)('br', {})),
            (0, T.Z)(N.a, {
              title: 'Chart title',
              list: [{ label: 'Label 1', value: 'Value 1' }],
            }),
            h || (h = (0, T.Z)('br', {})),
            b || (b = (0, T.Z)('br', {})),
            (0, T.Z)(N.a, {
              title: 'Chart title',
              description: 'Chart description',
              list: [
                { label: 'Label 1', value: 'Value 1' },
                {
                  label: 'Label 2',
                  value:
                    'Value 2 Value 2 Value 2 Value 2 Value 2 Value 2 Value 2',
                },
                { label: 'Label 3', value: 'Value 3' },
                { label: 'Label 4', value: 'Value 4' },
              ],
              onClick: C,
            })
          );
        },
        WithCustomTooltip: function () {
          var e = (0, _.useState)(null),
            t = (0, y.Z)(e, 2),
            n = t[0],
            r = t[1],
            i = (0, _.useCallback)(function (e) {
              r(e);
            }, []),
            o = (0, _.useCallback)(function (e) {
              return function () {
                console.log('Tooltip click', e);
              };
            }, []);
          return (0, T.Z)(
            _.Fragment,
            {},
            void 0,
            (0, T.Z)(M.G, { options: Z, callback: i }),
            (0, T.Z)(w.O, { chart: n }, void 0, function (e) {
              var t = e.x,
                n = e.y;
              return (0, T.Z)(N.a, {
                title: 'Chart title',
                list: [
                  { label: 'Label X', value: t },
                  { label: 'Label Y', value: n },
                  { label: 'Label 3', value: 'Value 3' },
                  { label: 'Label 4', value: 'Value 4' },
                ],
                onClick: o(e),
              });
            })
          );
        },
      };
    },
    47684: function (e, t, n) {
      'use strict';
      n.d(t, {
        G: function () {
          return h;
        },
      });
      var r = n(87462),
        i = n(45987),
        o = n(67294),
        a = n(78840),
        s = n.n(a),
        l = n(23960),
        u = n.n(l),
        c = n(93783),
        d = n.n(c),
        m = n(75708),
        p = n.n(m),
        g = n(61873),
        f = n(45901),
        v = ['options'];
      !(function (e) {
        var t = e.getOptions().plotOptions,
          n = e.seriesTypes;
        function r(e, t, n) {
          var r,
            o,
            a,
            s = [],
            l = [],
            u = [],
            c = [];
          (r = i(e, t, 12)), (o = i(e, t, 26));
          for (var d = 0; d < r.length; d++)
            null == o[d][1]
              ? s.push([e[d], null])
              : s.push([e[d], r[d][1] - o[d][1]]);
          for (d = 0; d < s.length; d++) l.push(s[d][0]), u.push(s[d][1]);
          a = i(l, u, 9);
          for (d = 0; d < s.length; d++)
            null == s[d][1]
              ? c.push([s[d][0], null])
              : c.push([s[d][0], s[d][1] - a[d][1]]);
          return [s, a, c];
        }
        function i(e, t, n) {
          for (
            var r,
              i = !1,
              a = n,
              s = 2 / (a + 1),
              l = [],
              u = [],
              c = t.length,
              d = (e[0], 0);
            d < c;
            d++
          )
            t[d - 1] && u.push(t[d]),
              a == u.length
                ? ((r = t[d]),
                  (i = i ? r * s + i * (1 - s) : o(u)),
                  l.push([e[d], i]),
                  u.splice(0, 1))
                : l.push([e[d], null]);
          return l;
        }
        function o(e) {
          for (var t = 0, n = e.length, r = n; r--; ) t += e[r];
          return t / n;
        }
        (t.trendline = e.merge(t.line, {
          marker: { enabled: !1 },
          tooltip: { valueDecimals: 2 },
        })),
          (n.trendline = e.extendClass(n.line, {
            type: 'trendline',
            animate: null,
            requiresSorting: !1,
            processData: function () {
              this.linkedParent &&
                ([].concat(this.linkedParent.options.data),
                this.setData(this.runAlgorithm(), !1)),
                e.Series.prototype.processData.call(this);
            },
            runAlgorithm: function () {
              var e = this.linkedParent.xData,
                t = this.linkedParent.yData,
                n = this.options.periods || 100;
              return this[this.options.algorithm || 'linear'](e, t, n);
            },
            MACD: function (e, t, n) {
              return r(e, t, n)[0];
            },
            signalLine: function (e, t, n) {
              return r(e, t, n)[1];
            },
            SMA: function (e, t, n) {
              return (function (e, t, n) {
                for (
                  var r = [], i = [], a = t.length, s = (e[0], 0);
                  s < a;
                  s++
                )
                  r.push(t[s]),
                    n == r.length
                      ? (i.push([e[s], o(r)]), r.splice(0, 1))
                      : i.push([e[s], null]);
                return i;
              })(e, t, n);
            },
            EMA: function (e, t, n) {
              return i(e, t, n);
            },
            linear: function (e, t, n) {
              return (function (e, t, n) {
                var r,
                  i = [],
                  o = 0,
                  a = 0,
                  s = 0,
                  l = 0,
                  u = 0,
                  c = 0,
                  d = 0,
                  m = 0,
                  p = 0,
                  g = 0;
                r = e.length;
                for (var f = 0; f < r; f++)
                  (o += e[f] * t[f]),
                    (s += e[f]),
                    (l += t[f]),
                    (u += Math.pow(e[f], 2)),
                    (d += e[f]),
                    (p += t[f]);
                (o *= r),
                  (a = s * l),
                  (u *= r),
                  (c = Math.pow(d, 2)),
                  (g = (p - (m = (o - a) / (u - c)) * d) / r),
                  i.push([e[0], m * e[0] + g]);
                var v = m * e[r - 1] + g;
                return i.push([e[r - 1], v]), i;
              })(e, t);
            },
          })),
          (t.histogram = e.merge(t.column, {
            borderWidth: 0,
            tooltip: { valueDecimals: 2 },
          })),
          (n.histogram = e.extendClass(n.column, {
            type: 'histogram',
            animate: null,
            requiresSorting: !1,
            processData: function () {
              this.linkedParent &&
                ([].concat(this.linkedParent.options.data),
                this.setData(this.runAlgorithm(), !1)),
                e.Series.prototype.processData.call(this);
            },
            runAlgorithm: function () {
              var e = this.linkedParent.xData,
                t = this.linkedParent.yData,
                n = this.options.periods || 100;
              return this[this.options.algorithm || 'histogram'](e, t, n);
            },
            histogram: function (e, t, n) {
              return r(e, t, n)[2];
            },
          }));
      })(s()),
        u()(s()),
        d()(s()),
        (window.Highcharts = s());
      var h = o.forwardRef(function (e, t) {
        var n = e.options,
          a = (0, i.Z)(e, v);
        return (
          (0, o.useMemo)(function () {
            s().setOptions({
              title: { text: '' },
              subtitle: { text: '' },
              chart: {
                height: 280,
                spacing: [4, 4, 4, 4],
                style: {
                  fontFamily: (0, g.MX)('--font-family'),
                  fontWeight: (0, g.MX)('--font-weight-base'),
                },
              },
              exporting: { accessibility: { enabled: !1 } },
              credits: { enabled: !1 },
              colors: Array.from({ length: 11 }, function (e, t) {
                return (0, g.MX)('--color-chart-'.concat(t + 1));
              }),
              legend: {
                symbolRadius: 2,
                symbolHeight: 12,
                symbolWidth: 12,
                itemDistance: 12,
                itemStyle: { fontSize: '12px', margin: 8 },
              },
              xAxis: {
                crosshair: !0,
                lineColor: (0, g.MX)('--color-neutral-200'),
                lineWidth: 1,
                labels: {
                  style: {
                    color: (0, g.MX)('--color-neutral-800'),
                    fontSize: '12px',
                    fontWeight: (0, g.MX)('--font-weight-semibold'),
                  },
                },
              },
              yAxis: {
                min: 0,
                title: {
                  style: {
                    color: (0, g.MX)('--color-neutral-800'),
                    fontSize: '12px',
                    fontWeight: (0, g.MX)('--font-weight-semibold'),
                  },
                },
                gridLineColor: (0, g.MX)('--color-neutral-200'),
                gridLineDashStyle: 'Dash',
                lineColor: (0, g.MX)('--color-neutral-200'),
                lineWidth: 1,
                labels: {
                  style: {
                    color: (0, g.MX)('--color-neutral-500'),
                    fontSize: '11px',
                    fontWeight: (0, g.MX)('--font-weight-semibold'),
                  },
                },
              },
              tooltip: {
                backgroundColor: 'transparent',
                borderWidth: 0,
                borderRadius: 0,
                shadow: !1,
                padding: 0,
                shared: !1,
                useHTML: !0,
                shape: 'square',
                formatter: function () {
                  return (0, f.l)({
                    title: String(this.x),
                    borderColor: this.color,
                    list: [
                      { label: String(this.key), value: (0, g.uf)(this.y) },
                    ],
                  });
                },
              },
              plotOptions: {
                column: {
                  minPointLength: 2,
                  pointPadding: 0.2,
                  borderWidth: 0,
                  dataLabels: {
                    enabled: !1,
                    rotation: -90,
                    align: 'left',
                    y: -5,
                    style: {
                      fontSize: '10px',
                      color: 'contrast',
                      textOutline: '',
                      fontWeight: (0, g.MX)('--font-weight-semibold'),
                    },
                  },
                },
                bar: {
                  dataLabels: {
                    enabled: !1,
                    align: 'left',
                    style: {
                      fontSize: '11px',
                      color: 'contrast',
                      textOutline: '',
                      fontWeight: (0, g.MX)('--font-weight-semibold'),
                    },
                  },
                },
              },
            });
          }, []),
          n
            ? o.createElement(
                p(),
                (0, r.Z)({ highcharts: s(), options: n, ref: t }, a)
              )
            : null
        );
      });
      h.displayName = 'Charts';
    },
    45901: function (e, t, n) {
      'use strict';
      n.d(t, {
        a: function () {
          return T;
        },
        l: function () {
          return _;
        },
      });
      var r,
        i = n(22928),
        o = n(67294),
        a = n(97762),
        s = n(86485),
        l = n(64517),
        u = 'Charts_chartsTooltipLayout__3w-qy',
        c = 'Charts_chartsTooltipTitle__3yw0U line-clamp',
        d = 'Charts_chartsTooltipDescription__1T0gl line-clamp',
        m = 'Charts_chartsTooltipContent__vTU31',
        p = 'Charts_chartsTooltipList__30Wd_',
        g = 'Charts_chartsTooltipListItem__3hDH0',
        f = 'Charts_chartsTooltipListItemLabel__2eywR line-clamp',
        v = 'Charts_chartsTooltipListItemValue__1otd0',
        h = 'Charts_chartsTooltipFooter__1Ucss',
        b = 'Charts_chartsTooltipFooterButton__SnGA8',
        y = 'Charts_chartsTooltipFooterButtonImg__WIwXR',
        T = function (e) {
          var t = e.title,
            n = e.description,
            a = e.list,
            T = e.borderColor,
            _ = e.onClick,
            M = (0, s.$G)().t,
            N = (0, o.useMemo)(
              function () {
                return { borderLeftColor: T };
              },
              [T]
            );
          return (0, i.Z)(
            'div',
            { className: u },
            void 0,
            (0, i.Z)(
              'div',
              { style: N, className: m },
              void 0,
              (0, i.Z)('h1', { className: c }, void 0, t),
              n ? (0, i.Z)('span', { className: d }, void 0, n) : null,
              null != a && a.length
                ? (0, i.Z)(
                    'ul',
                    { className: p },
                    void 0,
                    a.map(function (e, t) {
                      var n = e.label,
                        r = e.value;
                      return (0,
                      i.Z)('li', { className: g }, t, (0, i.Z)('span', { className: f }, void 0, n), (0, i.Z)('strong', { className: v }, void 0, r));
                    })
                  )
                : null
            ),
            _
              ? (0, i.Z)(
                  'div',
                  { className: h },
                  void 0,
                  (0, i.Z)(
                    l.z,
                    { className: b, onClick: _ },
                    void 0,
                    (0, i.Z)(
                      'svg',
                      {
                        width: '13',
                        height: '16',
                        viewBox: '0 0 13 16',
                        fill: 'none',
                        className: y,
                      },
                      void 0,
                      r ||
                        (r = (0, i.Z)('path', {
                          d: 'M10.7791 5.42391H10.8819C11.6624 5.42391 12.2972 6.0588 12.2972 6.83921V10.85C12.2972 11.9446 11.9185 13.0094 11.2286 13.8629V14.9077C11.2286 15.4916 10.7534 15.9669 10.1693 15.9669H4.77745C4.19338 15.9669 3.71801 15.4917 3.71801 14.9077V13.8084L1.53452 11.109C1.1174 10.5934 0.931684 9.94705 1.01153 9.28862C1.09138 8.63055 1.42617 8.04718 1.95429 7.64618L2.6885 7.08884V1.44838C2.6885 0.667963 3.32338 0.0330811 4.10362 0.0330811H4.20666C4.98689 0.0330811 5.62177 0.667963 5.62177 1.44838V3.79935C5.82998 3.67879 6.07147 3.60974 6.32889 3.60974H6.43175C7.06186 3.60974 7.59706 4.02367 7.77977 4.59375C8.00249 4.44769 8.26859 4.36271 8.55399 4.36271H8.65685C9.38327 4.36271 9.9838 4.91314 10.0631 5.61866C10.2734 5.49491 10.5179 5.42391 10.7791 5.42391ZM10.6155 13.4931C11.2435 12.753 11.5891 11.8151 11.5891 10.8502H11.5892V6.83956C11.5892 6.44971 11.272 6.13245 10.8821 6.13245H10.7793C10.3894 6.13245 10.0723 6.44971 10.0723 6.83956C10.0723 6.85078 10.0708 6.86158 10.0694 6.87244C10.0689 6.87564 10.0685 6.87884 10.0681 6.88205L10.07 7.99991C10.0704 8.19537 9.9121 8.35418 9.71664 8.35454H9.71593C9.52065 8.35454 9.3622 8.19643 9.36184 8.00098L9.35954 6.76503C9.3594 6.75273 9.36107 6.74077 9.36273 6.72878C9.36315 6.72576 9.36358 6.72274 9.36397 6.7197V5.77853C9.36397 5.38868 9.0467 5.07142 8.65685 5.07142H8.55399C8.16414 5.07142 7.84705 5.38868 7.84705 5.77853L7.84935 8.00027C7.84953 8.1959 7.69107 8.35454 7.49562 8.35471H7.49526C7.2998 8.35471 7.14135 8.19643 7.14117 8.00098L7.13887 5.77889V5.77871V5.77853V5.02556C7.13887 4.63571 6.82161 4.31845 6.43175 4.31845H6.32889C5.93904 4.31845 5.62177 4.63571 5.62177 5.02556L5.62408 8.00027C5.62425 8.1959 5.46562 8.35436 5.27016 8.35454H5.26999C5.07453 8.35454 4.91607 8.19608 4.9159 8.00062L4.9136 5.02556V5.02539V5.02521V1.44838C4.9136 1.05852 4.59651 0.74126 4.20666 0.74126H4.10362C3.71376 0.74126 3.39668 1.05852 3.39668 1.44838V7.2604V7.26801V9.45805C3.39668 9.65351 3.23805 9.81214 3.04259 9.81214C2.84713 9.81214 2.6885 9.65351 2.6885 9.45805V7.97796L2.38257 8.21024C2.00829 8.49422 1.77105 8.90762 1.71458 9.37396C1.6581 9.84047 1.78964 10.2985 2.08513 10.6637L4.34741 13.4605C4.3984 13.5235 4.42619 13.6021 4.42619 13.6832V14.9078C4.42619 15.1014 4.58376 15.2589 4.77745 15.2589H10.1693C10.3629 15.2589 10.5204 15.1015 10.5204 14.9078V13.7346C10.5204 13.6425 10.556 13.557 10.6155 13.4931Z',
                          fill: '#9FA0A8',
                        }))
                    ),
                    M('general.clickToFilter')
                  )
                )
              : null
          );
        },
        _ = function (e) {
          return (0, a.renderToString)(o.createElement(T, e)).replace(
            'data-reactroot=""',
            ''
          );
        };
    },
    74435: function (e, t, n) {
      'use strict';
      n.d(t, {
        O: function () {
          return s;
        },
      });
      var r = n(70885),
        i = n(67294),
        o = n(73935),
        a = function (e) {
          return 'highcharts-custom-tooltip-'.concat(e);
        },
        s = function (e) {
          var t = e.chart,
            n = e.children,
            s = (0, i.useRef)(!1),
            l = (0, i.useState)(null),
            u = (0, r.Z)(l, 2),
            c = u[0],
            d = u[1];
          (0, i.useEffect)(
            function () {
              if (t) {
                t.update({
                  tooltip: {
                    formatter: function () {
                      return (
                        s.current ||
                          ((s.current = !0),
                          t.tooltip.refresh.apply(t.tooltip, [
                            this.points
                              ? [this.points[0].point, this.points[1].point]
                              : this.point,
                          ]),
                          t.tooltip.hide(0)),
                        d(this),
                        '<div id="'.concat(a(t.index), '"></div>')
                      );
                    },
                    useHTML: !0,
                  },
                });
              }
            },
            [t]
          );
          var m = t && document.getElementById(a(t.index));
          return m && c ? (0, o.createPortal)(n(c), m) : null;
        };
    },
    6182: function (e, t, n) {
      'use strict';
      var r = n(22928),
        i = (n(67294), n(76219)),
        o = function (e, t) {
          console.log(t);
        };
      t.Z = {
        Default: function () {
          return (0, r.Z)(i.s, {
            height: '200px',
            list: [
              { children: 'Item 1', value: 1 },
              { children: 'Item 2', value: 2 },
            ],
            onChange: o,
          });
        },
      };
    },
    76219: function (e, t, n) {
      'use strict';
      n.d(t, {
        s: function () {
          return f;
        },
      });
      var r = n(4942),
        i = n(22928),
        o = n(67294),
        a = n(94184),
        s = n.n(a),
        l = n(86485),
        u = n(20348),
        c = n(97570),
        d = 'CheckboxList_checkboxListRow__11yfq',
        m = 'CheckboxList_disabled__1C7tb',
        p = 'CheckboxList_checkboxListLabel__34RCE',
        g = 'CheckboxList_checkboxListLabelWhenExclude__3H6Ym',
        f = function (e) {
          var t = e.height,
            n = void 0 === t ? '100%' : t,
            a = e.list,
            f = void 0 === a ? [] : a,
            v = e.onChange,
            h = e.excludeSelected,
            b = (0, l.$G)().t,
            y = (0, o.useMemo)(
              function () {
                return { height: n };
              },
              [n]
            ),
            T = (0, o.useCallback)(
              function (e) {
                return function (t) {
                  v(t, e);
                };
              },
              [v]
            ),
            _ = (0, o.useCallback)(
              function (e) {
                var t = f[e];
                return t
                  ? (0, i.Z)(c.o, {
                      id: 'value-'.concat(t.value),
                      name: 'value-'.concat(t.value),
                      'data-testid': 'id-checkbox-list-item-'.concat(e),
                      label: t.children,
                      className: s()(d, (0, r.Z)({}, m, t.disabled)),
                      classNameLabel: h && t.checked ? g : p,
                      checked: t.checked,
                      disabled: t.disabled,
                      onChange: T(t),
                    })
                  : (0, i.Z)(
                      'div',
                      { className: d },
                      void 0,
                      b('general.loading'),
                      '...'
                    );
              },
              [T, f, b, h]
            );
          return (0, i.Z)(u.OO, {
            style: y,
            totalCount: f.length,
            itemContent: _,
          });
        };
    },
    6002: function (e, t, n) {
      'use strict';
      n.d(t, {
        s: function () {
          return r.s;
        },
      });
      var r = n(76219);
    },
    37884: function (e, t, n) {
      'use strict';
      var r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        d,
        m,
        p,
        g = n(22928),
        f = n(67294),
        v = n(18493);
      t.Z = {
        Default: function () {
          return (0, g.Z)(
            f.Fragment,
            {},
            void 0,
            r || (r = (0, g.Z)(v.A, {})),
            i || (i = (0, g.Z)(v.A, { count: 0 })),
            o || (o = (0, g.Z)('br', {})),
            a || (a = (0, g.Z)('br', {})),
            s || (s = (0, g.Z)(v.A, { count: 10 })),
            l || (l = (0, g.Z)('br', {})),
            u || (u = (0, g.Z)('br', {})),
            c || (c = (0, g.Z)(v.A, { count: 100 })),
            d || (d = (0, g.Z)('br', {})),
            m || (m = (0, g.Z)('br', {})),
            p || (p = (0, g.Z)(v.A, { count: 1e3 }))
          );
        },
      };
    },
    18493: function (e, t, n) {
      'use strict';
      n.d(t, {
        A: function () {
          return s;
        },
      });
      var r = n(22928),
        i = (n(67294), n(94184)),
        o = n.n(i),
        a = {
          counter: 'Counter_counter__2d6O8',
          small: 'Counter_small__ZyX57',
          middle: 'Counter_middle__3W_eQ',
        },
        s = function (e) {
          var t = e.count,
            n = e.className,
            i = e.size,
            s = void 0 === i ? 'small' : i;
          return 'number' == typeof t
            ? (0, r.Z)(
                'span',
                {
                  'data-testid': 'id-counter',
                  className: o()(a.counter, a[s], n),
                },
                void 0,
                t
              )
            : null;
        };
    },
    79087: function (e, t, n) {
      'use strict';
      n.d(t, {
        A: function () {
          return r.A;
        },
      });
      var r = n(18493);
    },
    79058: function (e, t, n) {
      'use strict';
      var r,
        i,
        o,
        a,
        s = n(22928),
        l = (n(67294), n(59242)),
        u = n.n(l),
        c = n(16666),
        d = n.n(c),
        m = n(87598),
        p = n(61873);
      t.Z = {
        WithParse: function () {
          return (0, s.Z)(
            'dl',
            {},
            void 0,
            r ||
              (r = (0, s.Z)(
                'dt',
                {},
                void 0,
                'Format ',
                (0, s.Z)('strong', {}, void 0, '(20201010)'),
                ':'
              )),
            (0, s.Z)(
              'dd',
              {},
              void 0,
              u()(
                p.hT.parseISO,
                d()(2, p.hT.format)(d().placeholder, m.Hu.ISO_LONG)
              )('20201010')
            ),
            i ||
              (i = (0, s.Z)(
                'dt',
                {},
                void 0,
                'Format UTC ',
                (0, s.Z)('strong', {}, void 0, '(20201010Z)'),
                ':'
              )),
            (0, s.Z)(
              'dd',
              {},
              void 0,
              u()(
                p.hT.parseISO,
                d()(2, p.hT.format)(d().placeholder, m.Hu.ISO_LONG)
              )('20201010Z')
            ),
            o ||
              (o = (0, s.Z)(
                'dt',
                {},
                void 0,
                'Format ISO',
                ' ',
                (0, s.Z)(
                  'strong',
                  {},
                  void 0,
                  '(2018-11-13T00:00:00 || 2018-11-13T00:00:00Z)'
                ),
                ':'
              )),
            (0, s.Z)(
              'dd',
              {},
              void 0,
              u()(
                p.hT.parseISO,
                d()(2, p.hT.format)(d().placeholder, m.Hu.ISO_LONG)
              )('2018-11-13T00:00:00Z')
            ),
            a ||
              (a = (0, s.Z)(
                'dt',
                {},
                void 0,
                'Get UTC date ',
                (0, s.Z)('strong', {}, void 0, '(2021-09-22T21:00:00.000Z)'),
                ' (Return exactly same JS Date object as was passed to parseISO):'
              )),
            (0, s.Z)(
              'dd',
              {},
              void 0,
              u()(
                p.hT.parseISO,
                p.hT.getUTCDate,
                d()(3, p.hT.format)(d().placeholder, m.Hu.ISO_LONG, {
                  timeZone: m.Hu.UTC_TIME_ZONE,
                })
              )('2021-09-22T21:00:00.000Z')
            )
          );
        },
      };
    },
    2452: function (e, t, n) {
      'use strict';
      var r = n(22928),
        i = n(87462),
        o = n(67294),
        a = n(53324),
        s = (0, o.forwardRef)(function (e, t) {
          return o.createElement(
            'button',
            (0, i.Z)({}, e, { ref: t }),
            'I am the trigger!'
          );
        });
      (s.displayName = 'Trigger'),
        (t.Z = {
          Default: function () {
            return (0, r.Z)(a.Dw, {
              value: [new Date(), new Date()],
              toggleComponentClass: s,
            });
          },
        });
    },
    53324: function (e, t, n) {
      'use strict';
      n.d(t, {
        Dw: function () {
          return c;
        },
      });
      var r = n(87462),
        i = n(42982),
        o = n(70885),
        a = n(67294),
        s = n(38921),
        l = n.n(s),
        u = n(61873),
        c =
          (l().afterToday,
          l().before,
          l().allowedRange,
          function (e) {
            var t = e.value,
              n = e.onClose,
              s = e.onSelect,
              c = (0, a.useRef)(null),
              d = (0, a.useRef)(0),
              m = (0, a.useState)(t),
              p = (0, o.Z)(m, 2),
              g = p[0],
              f = p[1],
              v = (0, a.useMemo)(
                function () {
                  if (!g) return [];
                  var e =
                    2 === g.length && u.hT.isEqual.apply(u.hT, (0, i.Z)(g));
                  return [
                    {
                      label: g[0] && u.hT.format(g[0]),
                      value: [new Date(), new Date()],
                    },
                  ].concat(
                    (0, i.Z)(
                      1 === g.length || e
                        ? []
                        : [
                            {
                              label: g[1] && u.hT.format(g[1]),
                              value: [new Date(), new Date()],
                            },
                          ]
                    )
                  );
                },
                [g]
              ),
              h = (0, a.useCallback)(
                function () {
                  var e,
                    t,
                    r = g || [],
                    i = (0, o.Z)(r, 2),
                    a = i[0],
                    s = i[1];
                  a &&
                    s &&
                    (null == c ||
                      null === (e = c.current) ||
                      void 0 === e ||
                      null === (t = e.updateValue) ||
                      void 0 === t ||
                      t.call(e, void 0, g),
                    (d.current = 0));
                  null == n || n();
                },
                [g, n]
              ),
              b = (0, a.useCallback)(
                function (e, t) {
                  2 !== d.current ? (d.current += 1) : (d.current = 1),
                    f(function (t) {
                      var n,
                        r = t;
                      return (
                        1 === d.current && (r = [e]),
                        2 === d.current && (r = [null == t ? void 0 : t[0], e]),
                        null === (n = r) || void 0 === n
                          ? void 0
                          : n.sort(function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : new Date(),
                                t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : new Date();
                              return (
                                (null == e ? void 0 : e.valueOf()) -
                                (null == t ? void 0 : t.valueOf())
                              );
                            })
                      );
                    }),
                    null == s || s(e, t);
                },
                [s]
              );
            return a.createElement(
              l(),
              (0, r.Z)({ ref: c, format: 'MMM DD, YYYY' }, e, {
                showWeekNumbers: !0,
                isoWeek: !0,
                appearance: 'subtle',
                ranges: v,
                onClose: h,
                onSelect: b,
              })
            );
          });
    },
    8448: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return Y;
        },
      });
      var r,
        i,
        o = n(22928),
        a = n(67294),
        s = n(92667),
        l = n(74416),
        u = n(4942),
        c = n(70885),
        d = n(63738),
        m = n.n(d),
        p = n(94184),
        g = n.n(p),
        f = n(61873),
        v = n(87598),
        h = 'NavBar_navBar__123ZK',
        b = 'NavBar_navBarContent__WAZfA',
        y = function (e) {
          var t = e.month,
            n = e.onPreviousClick,
            r = e.onNextClick,
            i = e.showPreviousButton,
            l = e.showNextButton,
            u = (0, a.useMemo)(
              function () {
                return f.hT.format(
                  t,
                  ''.concat(v.Hu.LONG_MONTH, ' ').concat(v.Hu.LONG_YEAR)
                );
              },
              [t]
            ),
            c = (0, a.useCallback)(
              function () {
                return n();
              },
              [n]
            ),
            d = (0, a.useCallback)(
              function () {
                return r();
              },
              [r]
            );
          return (0, o.Z)(
            'div',
            { className: h },
            void 0,
            (0, o.Z)(s.JO, {
              as: 'button',
              disabled: !i,
              category: 'modern',
              name: 'chevron_left',
              onClick: c,
            }),
            (0, o.Z)('div', { className: b }, void 0, u),
            (0, o.Z)(s.JO, {
              as: 'button',
              disabled: !l,
              category: 'modern',
              name: 'chevron_right',
              onClick: d,
            })
          );
        },
        T = 'Calendar_dateRangePickerWrapper__38niK',
        _ = 'Calendar_dateRangePicker__2eW4A',
        M = 'Calendar_dateRangePickerWithWeekNumbers__3DY3P',
        N = 'Calendar_dateRangePickerLeft__4Iz0N',
        w = 'Calendar_dateRangePickerSelectDirectionLeft__31175',
        C = 'Calendar_dateRangePickerSelectDirectionRight__-sU5Y',
        Z = 'Calendar_dateRangePickerRight__34WEb';
      function D(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var I,
        O,
        L,
        A,
        S,
        k,
        j,
        P,
        x,
        R,
        z,
        F = { from: void 0, to: void 0, enteredTo: void 0 },
        U = function (e) {
          var t = e.value,
            n = void 0 === t ? [] : t,
            s = e.showWeekNumbers,
            l = void 0 !== s && s,
            d = e.fixedWeeks,
            p = void 0 === d || d,
            v = (0, a.useState)(function () {
              return { from: n[0], to: n[1], enteredTo: void 0 };
            }),
            h = (0, c.Z)(v, 2),
            b = h[0],
            D = b.from,
            I = b.to,
            O = b.enteredTo,
            L = h[1],
            A = (0, a.useMemo)(
              function () {
                return { start: D, end: I };
              },
              [D, I]
            ),
            S = (0, a.useMemo)(
              function () {
                return O && (D || I)
                  ? D
                    ? f.hT.isBefore(O, D)
                      ? -1
                      : 1
                    : I
                    ? f.hT.isBefore(O, I)
                      ? -1
                      : 1
                    : void 0
                  : 0;
              },
              [O, D, I]
            ),
            k = (0, a.useMemo)(
              function () {
                return g()(
                  _,
                  (0, u.Z)({}, M, l),
                  (0, u.Z)({}, w, -1 === S),
                  (0, u.Z)({}, C, 1 === S)
                );
              },
              [S, l]
            ),
            j = (0, a.useMemo)(
              function () {
                return !D && I ? f.hT.subMonths(new Date(), 1) : D;
              },
              [D, I]
            ),
            P = (0, a.useMemo)(
              function () {
                return (!D && !I) || (D && !I)
                  ? f.hT.addMonths(new Date(), 1)
                  : I;
              },
              [D, I]
            ),
            x = (0, a.useCallback)(function (e) {
              L(function (t) {
                var n =
                    (!t.from && !t.to) || (!t.from && t.to) || (t.from && t.to)
                      ? 'from'
                      : 'to',
                  r = E(
                    E({}, t.from && t.to ? F : t),
                    {},
                    (0, u.Z)(
                      { enteredTo: t.from || t.to ? void 0 : t.enteredTo },
                      n,
                      e
                    )
                  );
                return r.from && r.to && f.hT.isBefore(r.to, r.from)
                  ? E(E({}, r), {}, { from: r.to, to: r.from })
                  : r;
              });
            }, []),
            R = (0, a.useCallback)(
              function (e) {
                ((D && !I) || (!D && I)) &&
                  L(function (t) {
                    return E(E({}, t), {}, { enteredTo: e });
                  });
              },
              [D, I]
            );
          return (0, o.Z)(
            'div',
            { className: T },
            void 0,
            (0, o.Z)(m(), {
              className: g()(k, N),
              fixedWeeks: p,
              showWeekNumbers: l,
              firstDayOfWeek: f.hT.getDatasetWeekStart(),
              selectedDays: [D, { from: D || O, to: I || O }],
              modifiers: A,
              toMonth: j,
              initialMonth: j,
              navbarElement: y,
              captionElement: r || (r = (0, o.Z)(a.Fragment, {})),
              onDayClick: x,
              onDayMouseEnter: R,
            }),
            (0, o.Z)(m(), {
              className: g()(k, Z),
              fixedWeeks: p,
              showWeekNumbers: l,
              firstDayOfWeek: f.hT.getDatasetWeekStart(),
              selectedDays: [{ from: D || O, to: I || O }, I],
              modifiers: A,
              fromMonth: P,
              initialMonth: P,
              navbarElement: y,
              captionElement: i || (i = (0, o.Z)(a.Fragment, {})),
              onDayClick: x,
              onDayMouseEnter: R,
            })
          );
        },
        G = function (e) {
          var t = e.value,
            n = void 0 === t ? [] : t,
            r = (0, a.useCallback)(
              function (e) {
                return a.createElement(
                  s.WA,
                  e,
                  (0, o.Z)(s.C0, { from: n[0], to: n[1] })
                );
              },
              [n]
            );
          return (0, o.Z)(
            l.L,
            { hideOnClick: !1, Trigger: r },
            void 0,
            (0, o.Z)(U, { value: n })
          );
        },
        Y = {
          Default: function () {
            return (0, o.Z)(G, { value: [new Date()] });
          },
          DateRangePickerCalendar: function () {
            return (0, o.Z)(
              a.Fragment,
              {},
              void 0,
              I || (I = (0, o.Z)('h3', {}, void 0, 'Initial (from, to)')),
              (0, o.Z)(U, { value: [new Date(), new Date(2021, 11, 23)] }),
              O || (O = (0, o.Z)('br', {})),
              L || (L = (0, o.Z)('br', {})),
              A || (A = (0, o.Z)('h3', {}, void 0, 'Initial (from)')),
              (0, o.Z)(U, { value: [new Date()] }),
              S || (S = (0, o.Z)('br', {})),
              k || (k = (0, o.Z)('br', {})),
              j || (j = (0, o.Z)('h3', {}, void 0, 'Initial (to)')),
              (0, o.Z)(U, { value: [void 0, new Date()] }),
              P || (P = (0, o.Z)('br', {})),
              x || (x = (0, o.Z)('br', {})),
              R || (R = (0, o.Z)('h3', {}, void 0, 'Initial (empty)')),
              z || (z = (0, o.Z)(U, {}))
            );
          },
        };
    },
    32525: function (e, t, n) {
      'use strict';
      var r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        d,
        m,
        p,
        g,
        f,
        v,
        h,
        b,
        y,
        T,
        _,
        M,
        N,
        w,
        C,
        Z,
        D,
        E,
        I,
        O,
        L,
        A,
        S,
        k,
        j,
        P,
        x = n(22928),
        R = n(67294),
        z = n(64517),
        F = n(34061),
        U = function (e) {
          var t = e.toggle;
          return (0, x.Z)(z.z, { onClick: t }, void 0, 'Click me');
        };
      t.Z = {
        Default: function () {
          return (
            r ||
            (r = (0, x.Z)(
              R.Fragment,
              {},
              void 0,
              (0, x.Z)(
                F.L,
                { width: '20rem', Trigger: U },
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
                (0, x.Z)(
                  R.Fragment,
                  {},
                  void 0,
                  (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
                )
              ),
              (0, x.Z)('br', {}),
              (0, x.Z)('br', {}),
              (0, x.Z)(
                F.L,
                { width: '20rem', Trigger: U },
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
                (0, x.Z)(
                  R.Fragment,
                  {},
                  void 0,
                  (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
                )
              )
            ))
          );
        },
        VisibleByDefault: function () {
          return (
            i ||
            (i = (0, x.Z)(
              F.L,
              { width: '20rem', Trigger: U, defaultVisibility: !0 },
              void 0,
              (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
              (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
              (0, x.Z)(
                R.Fragment,
                {},
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
              )
            ))
          );
        },
        WithAlign: function () {
          return (0, x.Z)(
            'div',
            {
              style: {
                display: 'flex',
                height: '500',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              },
            },
            void 0,
            o ||
              (o = (0, x.Z)(
                F.L,
                { width: '20rem', Trigger: U },
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
                (0, x.Z)(
                  R.Fragment,
                  {},
                  void 0,
                  (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
                )
              )),
            a || (a = (0, x.Z)('br', {})),
            s || (s = (0, x.Z)('br', {})),
            l ||
              (l = (0, x.Z)(
                F.L,
                { width: '20rem', Trigger: U, align: 'bottom-right' },
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
                (0, x.Z)(
                  R.Fragment,
                  {},
                  void 0,
                  (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
                )
              )),
            u || (u = (0, x.Z)('br', {})),
            c || (c = (0, x.Z)('br', {})),
            d ||
              (d = (0, x.Z)(
                F.L,
                { width: '20rem', Trigger: U, align: 'bottom-left' },
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
                (0, x.Z)(
                  R.Fragment,
                  {},
                  void 0,
                  (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
                )
              )),
            m || (m = (0, x.Z)('br', {})),
            p || (p = (0, x.Z)('br', {})),
            g ||
              (g = (0, x.Z)(
                F.L,
                { width: '20rem', Trigger: U, align: 'top' },
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
                (0, x.Z)(
                  R.Fragment,
                  {},
                  void 0,
                  (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
                )
              )),
            f || (f = (0, x.Z)('br', {})),
            v || (v = (0, x.Z)('br', {})),
            h ||
              (h = (0, x.Z)(
                F.L,
                { width: '20rem', Trigger: U, align: 'top-right' },
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
              )),
            b || (b = (0, x.Z)('br', {})),
            y || (y = (0, x.Z)('br', {})),
            T ||
              (T = (0, x.Z)(
                F.L,
                { width: '20rem', Trigger: U, align: 'top-left' },
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
              ))
          );
        },
        WithPortals: function () {
          return (0, x.Z)(
            'div',
            {
              style: {
                display: 'flex',
                height: '500',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              },
            },
            void 0,
            _ ||
              (_ = (0, x.Z)(
                F.L,
                { usePortals: !0, width: '20rem', Trigger: U },
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
              )),
            M || (M = (0, x.Z)('br', {})),
            N || (N = (0, x.Z)('br', {})),
            w ||
              (w = (0, x.Z)(
                F.L,
                {
                  usePortals: !0,
                  width: '20rem',
                  Trigger: U,
                  align: 'bottom-right',
                },
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
              )),
            C || (C = (0, x.Z)('br', {})),
            Z || (Z = (0, x.Z)('br', {})),
            D ||
              (D = (0, x.Z)(
                F.L,
                {
                  usePortals: !0,
                  width: '20rem',
                  Trigger: U,
                  align: 'bottom-left',
                },
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
              )),
            E || (E = (0, x.Z)('br', {})),
            I || (I = (0, x.Z)('br', {})),
            O ||
              (O = (0, x.Z)(
                F.L,
                { usePortals: !0, width: '20rem', Trigger: U, align: 'top' },
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
              )),
            L || (L = (0, x.Z)('br', {})),
            A || (A = (0, x.Z)('br', {})),
            S ||
              (S = (0, x.Z)(
                F.L,
                {
                  usePortals: !0,
                  width: '20rem',
                  Trigger: U,
                  align: 'top-right',
                },
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
              )),
            k || (k = (0, x.Z)('br', {})),
            j || (j = (0, x.Z)('br', {})),
            P ||
              (P = (0, x.Z)(
                F.L,
                {
                  usePortals: !0,
                  width: '20rem',
                  Trigger: U,
                  align: 'top-left',
                },
                void 0,
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 1'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 2'),
                (0, x.Z)('a', { href: '#' }, void 0, 'Link 3')
              ))
          );
        },
      };
    },
    34061: function (e, t, n) {
      'use strict';
      n.d(t, {
        L: function () {
          return f;
        },
      });
      var r = n(22928),
        i = n(4942),
        o = n(70885),
        a = n(67294),
        s = n(94184),
        l = n.n(s),
        u = n(86485),
        c = n(20404),
        d = n(80746);
      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var g = function () {},
        f = (0, a.forwardRef)(function (e, t) {
          var n = e.testId,
            s = void 0 === n ? 'id-dropdown' : n,
            m = e.className,
            f = e.classNameLayout,
            v = e.children,
            h = e.Trigger,
            b = e.defaultVisibility,
            y = void 0 !== b && b,
            T = e.align,
            _ = void 0 === T ? 'bottom' : T,
            M = e.usePortals,
            N = void 0 !== M && M,
            w = e.hideOnClick,
            C = void 0 === w || w,
            Z = e.hideOnClickOutside,
            D = void 0 === Z || Z,
            E = e.width,
            I = e.onToggle,
            O = (0, a.useState)(y),
            L = (0, o.Z)(O, 2),
            A = L[0],
            S = L[1],
            k = (0, a.useState)(),
            j = (0, o.Z)(k, 2),
            P = j[0],
            x = j[1],
            R = (0, a.useRef)(null),
            z = (0, a.useRef)(null),
            F = (0, a.useCallback)(
              function () {
                S(function (e) {
                  return !e;
                }),
                  null == I || I({ isVisible: !A });
              },
              [I, A]
            );
          (0, u.t$)([z, R], D ? F : g);
          var U = l()(
              d.Z.dropdown,
              m,
              d.Z[_],
              (0, i.Z)({ 'is-visible': A }, d.Z.isVisible, A)
            ),
            G = l()(f, d.Z.dropdownLayout),
            Y = (0, a.useMemo)(
              function () {
                return { toggle: F, isVisible: A, setPositionStyles: x };
              },
              [A, F]
            ),
            V = (0, a.useCallback)(
              function () {
                var e,
                  t,
                  n =
                    null == R || null === (e = R.current) || void 0 === e
                      ? void 0
                      : e.getBoundingClientRect(),
                  r =
                    null == z || null === (t = z.current) || void 0 === t
                      ? void 0
                      : t.getBoundingClientRect();
                if (n && r) {
                  var i,
                    o = n.top + window.pageYOffset;
                  'bottom' === _ && (i = { top: o + n.height, left: n.left }),
                    'bottom-right' === _ &&
                      (i = {
                        top: o + n.height,
                        right: window.innerWidth - n.right,
                      }),
                    'bottom-left' === _ &&
                      (i = { top: o + n.height, left: n.left }),
                    'top' === _ && (i = { top: o - r.height, left: n.left }),
                    'top-right' === _ &&
                      (i = { top: o - r.height, left: n.left - r.width }),
                    'top-left' === _ &&
                      (i = { top: o - r.height, left: n.left + n.width }),
                    x(A ? i : void 0);
                }
              },
              [_, A]
            );
          (0, a.useLayoutEffect)(
            function () {
              N && V();
            },
            [V, N]
          ),
            (0, a.useEffect)(function () {
              y && (null == I || I({ isVisible: A }));
            }, []),
            (0, a.useImperativeHandle)(
              t,
              function () {
                return Y;
              },
              [Y]
            );
          var W = A
              ? a.createElement(
                  'div',
                  {
                    ref: z,
                    className: U,
                    'data-testid': 'dropdownList',
                    'aria-labelledby': 'dropdownMenuButton',
                    role: 'menu',
                    style: p({ width: E }, P || {}),
                    onClick: C ? F : void 0,
                  },
                  'function' == typeof v ? v(Y) : v
                )
              : null,
            H = (0, a.useMemo)(
              function () {
                return (0, a.isValidElement)(h)
                  ? (0, a.cloneElement)(h, { onClick: F, 'aria-hidden': !A })
                  : h({ isVisible: A, toggle: F });
              },
              [h, A, F]
            );
          return a.createElement(
            'div',
            { 'data-testid': s, ref: R, className: G },
            H,
            N ? (0, r.Z)(c.h, { id: 'id-dropdown' }, void 0, W) : W
          );
        });
    },
    74416: function (e, t, n) {
      'use strict';
      n.d(t, {
        L: function () {
          return r.L;
        },
        W: function () {
          return d;
        },
      });
      var r = n(34061),
        i = n(22928),
        o = n(4942),
        a = n(67294),
        s = n(94184),
        l = n.n(s),
        u = n(69088),
        c = n(80746),
        d = (0, a.forwardRef)(function (e, t) {
          var n,
            r = e.toggle,
            s = e.isVisible,
            d = e.isDisabled,
            m = e.className,
            p = e.iconClassName,
            g = e.children,
            f = e.isOpenable,
            v = void 0 === f || f,
            h = e.variant,
            b = l()(
              m,
              c.Z.dropdownTrigger,
              (0, o.Z)({}, c.Z.dropdownTriggerSelect, !!h)
            ),
            y = l()(
              p,
              c.Z.dropdownTriggerIcon,
              ((n = {}),
              (0, o.Z)(n, c.Z.dropdownTriggerIconRotate, s),
              (0, o.Z)(n, c.Z.dropdownTriggerIconSelect, !!h),
              (0, o.Z)(n, c.Z.dropdownTriggerIconHidden, d || !v),
              n)
            );
          return a.createElement(
            'button',
            {
              ref: t,
              type: 'button',
              'data-testid': 'id-dropdown-trigger',
              className: b,
              disabled: d,
              onClick: r,
            },
            g,
            (0, i.Z)(u.J, { name: 'icon-down-open-mini', className: y })
          );
        });
    },
    46658: function (e, t, n) {
      'use strict';
      var r = n(22928),
        i = (n(67294), n(35884));
      t.Z = {
        Default: function () {
          return (0, r.Z)(i.s, {
            list: [
              { id: 1, children: 'Hello world 1' },
              { id: 2, children: 'Hello world 2' },
              { id: 3, children: 'Hello world 3', disabled: !0 },
            ],
          });
        },
        Modern: function () {
          return (0, r.Z)(i.s, {
            variant: 'modern',
            list: [
              { id: 1, children: 'Hello world 1' },
              { id: 2, children: 'Hello world 2' },
              { id: 3, children: 'Hello world 3', disabled: !0 },
            ],
          });
        },
      };
    },
    35884: function (e, t, n) {
      'use strict';
      n.d(t, {
        s: function () {
          return u;
        },
      });
      var r = n(22928),
        i = n(4942),
        o = n(67294),
        a = n(94184),
        s = n.n(a),
        l = {
          dropdownListLayout: 'DropdownList_dropdownListLayout__v_ccA',
          hasBorder: 'DropdownList_hasBorder__1R-N0',
          dropdownListTitle: 'DropdownList_dropdownListTitle__ppxfm',
          modern: 'DropdownList_modern__3arPv',
          dropdownList: 'DropdownList_dropdownList__24vfB',
          dropdownListItem: 'DropdownList_dropdownListItem__2dA5n',
          dropdownListItemDisabled:
            'DropdownList_dropdownListItemDisabled__2C8nB',
          dropdownListItemActive: 'DropdownList_dropdownListItemActive__1hcim',
        },
        u = function (e) {
          var t = e.variant,
            n = void 0 === t ? '' : t,
            a = e.title,
            u = e.list,
            c = void 0 === u ? [] : u,
            d = e.className,
            m = e.classNameList,
            p = e.classNameTitle,
            g = e.classNameItem,
            f = e.hasBorder,
            v = void 0 !== f && f,
            h = e.onChange,
            b = s()(
              d,
              l.dropdownListLayout,
              l[n],
              (0, i.Z)({}, l.hasBorder, v)
            ),
            y = (0, o.useCallback)(
              function (e, t) {
                return function () {
                  return null == h ? void 0 : h(e, t);
                };
              },
              [h]
            );
          return c.length
            ? (0, r.Z)(
                'div',
                { className: b, 'data-testid': 'id-dropdown-list' },
                void 0,
                a
                  ? (0, r.Z)(
                      'h2',
                      { className: s()(l.dropdownListTitle, p) },
                      void 0,
                      a
                    )
                  : null,
                (0, r.Z)(
                  'ul',
                  { className: s()(l.dropdownList, m) },
                  void 0,
                  c.map(function (e, t) {
                    var n,
                      o = s()(
                        l.dropdownListItem,
                        ((n = {}),
                        (0, i.Z)(n, l.dropdownListItemDisabled, !!e.disabled),
                        (0, i.Z)(n, l.dropdownListItemActive, !!e.active),
                        n),
                        g,
                        e.className
                      ),
                      a = e.onClick || y(e, t);
                    return (0,
                    r.Z)('li', { className: o, onClick: e.disabled || e.active ? void 0 : a, 'aria-disabled': e.disabled, 'data-testid': 'id-dropdown-list-item-'.concat(t) }, t, e.children);
                  })
                )
              )
            : null;
        };
    },
    53181: function (e, t, n) {
      'use strict';
      n.d(t, {
        s: function () {
          return r.s;
        },
      });
      var r = n(35884);
    },
    63920: function (e, t, n) {
      'use strict';
      var r,
        i,
        o = n(22928),
        a = (n(67294), n(2707));
      t.Z = {
        Default: function () {
          return r || (r = (0, o.Z)(a.H, {}));
        },
        WithCustomDescription: function () {
          return (
            i ||
            (i = (0, o.Z)(a.H, {
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem amet velit in inventore illum. Corporis, delectus totam! Quos adipisci debitis autem qui alias deserunt in et eum repudiandae quam! Magnam.',
            }))
          );
        },
      };
    },
    2707: function (e, t, n) {
      'use strict';
      n.d(t, {
        H: function () {
          return c;
        },
      });
      var r,
        i = n(22928),
        o = (n(67294), n(69088)),
        a = n(89116),
        s = 'Empty_empty__3-Yhn',
        l = 'Empty_emptyIcon__1dRME',
        u = 'Empty_emptyDescription__l1sGU',
        c = function (e) {
          var t = e.description;
          return (0, i.Z)(
            'div',
            { className: s },
            void 0,
            (0, i.Z)(o.J, {
              category: 'modern',
              name: 'add-chart',
              size: '1.5rem',
              className: l,
            }),
            (0, i.Z)(
              'p',
              { className: u },
              void 0,
              t ||
                r ||
                (r = (0, i.Z)(a.c, { i18nKey: 'general.emptyDescription' }))
            )
          );
        };
    },
    38837: function (e, t, n) {
      'use strict';
      var r,
        i,
        o,
        a,
        s = n(22928),
        l = (n(67294), n(73314)),
        u = n(87384);
      t.Z = {
        DefaultGlobalError: function () {
          return r || (r = (0, s.Z)(l.g, {}));
        },
        DefaultLocalError: function () {
          return i || (i = (0, s.Z)(u.a, {}));
        },
        LocalErrorWithMessage: function () {
          return o || (o = (0, s.Z)(u.a, { message: 'This is error message' }));
        },
        LocalErrorWithDetails: function () {
          return (
            a || (a = (0, s.Z)(u.a, { details: 'This is details for modal' }))
          );
        },
      };
    },
    73314: function (e, t, n) {
      'use strict';
      n.d(t, {
        g: function () {
          return m;
        },
      });
      var r,
        i = n(22928),
        o = n(67294),
        a = n(94184),
        s = n.n(a),
        l = n(92667),
        u = n(86485),
        c = 'GlobalError_globalErrorWrapper__rop0t',
        d = 'GlobalError_globalErrorContent__3Ws7g',
        m = function (e) {
          var t = e.className,
            n = e.onRefresh,
            a = (0, u.$G)().t,
            m = (0, o.useCallback)(
              function () {
                n ? n() : window.location.reload();
              },
              [n]
            );
          return (0, i.Z)(
            'div',
            { className: s()(c, t) },
            void 0,
            r ||
              (r = (0, i.Z)('img', {
                src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAxIiBoZWlnaHQ9IjEyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGQ9Ik01Mi43NyA3Ni4wOThjMjEuMDE0IDAgMzguMDQ5LTE3LjAzNSAzOC4wNDktMzguMDQ5UzczLjc4NCAwIDUyLjc2OSAwQzMxLjc1NyAwIDE0LjcyMiAxNy4wMzUgMTQuNzIyIDM4LjA0OVMzMS43NTYgNzYuMDk4IDUyLjc3IDc2LjA5OFoiIGZpbGw9IiNGMkYyRjIiLz48cGF0aCBkPSJNLjUgOS4xMzZjMCAxMy44NDQgOC42ODUgMjUuMDQ2IDE5LjQxOCAyNS4wNDZMLjUgOS4xMzZaIiBmaWxsPSIjMkYyRTQxIi8+PHBhdGggZD0iTTE5LjkxOCAzNC4xODJjMC0xNCA5LjY5MS0yNS4zMjggMjEuNjY5LTI1LjMyOGwtMjEuNjcgMjUuMzI4WiIgZmlsbD0iIzJDMzdGMSIvPjxwYXRoIGQ9Ik03LjUzNSAxMC4zOWMwIDEzLjE1IDUuNTM5IDIzLjc5MiAxMi4zODMgMjMuNzkyTDcuNTM1IDEwLjM5WiIgZmlsbD0iIzJDMzdGMSIvPjxwYXRoIGQ9Ik0xOS45MTggMzQuMTgyYzAtMTcuODg4IDExLjIwMi0zMi4zNjMgMjUuMDQ2LTMyLjM2M0wxOS45MTggMzQuMTgyWiIgZmlsbD0iIzJGMkU0MSIvPjxwYXRoIGQ9Ik0xNS44MzIgMzQuMzU4czIuNzU0LS4wODUgMy41ODQtLjY3NWMuODMtLjU5MSA0LjIzNi0xLjI5NyA0LjQ0Mi0uMzUuMjA2Ljk0OCA0LjEzOCA0LjcxNSAxLjAzIDQuNzQtMy4xMS4wMjUtNy4yMjQtLjQ4NS04LjA1My0uOTktLjgyOC0uNTA0LTEuMDAzLTIuNzI1LTEuMDAzLTIuNzI1WiIgZmlsbD0iI0E4QThBOCIvPjxwYXRoIG9wYWNpdHk9Ii4yIiBkPSJNMjQuOTQzIDM3Ljc0M2MtMy4xMDkuMDI1LTcuMjI0LS40ODUtOC4wNTItLjk5LS42MzEtLjM4My0uODgyLTEuNzYyLS45NjYtMi4zOThsLS4wOTIuMDAzcy4xNzQgMi4yMjEgMS4wMDIgMi43MjZjLjgyOS41MDQgNC45NDQgMS4wMTQgOC4wNTIuOTg4Ljg5OC0uMDA3IDEuMjA4LS4zMjYgMS4xOS0uNzk5LS4xMjQuMjg2LS40NjYuNDY0LTEuMTM0LjQ3WiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0zNS45NzggODAuMzc0YzE4LjQ0OSAwIDMzLjQwNS0yLjAzNCAzMy40MDUtNC41NDRzLTE0Ljk1Ni00LjU0NC0zMy40MDUtNC41NDRTMi41NzQgNzMuMzIgMi41NzQgNzUuODNzMTQuOTU1IDQuNTQ0IDMzLjQwNCA0LjU0NFoiIGZpbGw9IiMzRjNENTYiLz48cGF0aCBvcGFjaXR5PSIuMSIgZD0iTTM1Ljk3OCA3OS42NDVjMTUuNDkgMCAyOC4wNDYtMS43MDggMjguMDQ2LTMuODE1cy0xMi41NTctMy44MTUtMjguMDQ2LTMuODE1Yy0xNS40ODkgMC0yOC4wNDUgMS43MDgtMjguMDQ1IDMuODE1czEyLjU1NiAzLjgxNSAyOC4wNDUgMy44MTVaIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTE0OS45NDcgMTI0Ljg2NWMyNy45MiAwIDUwLjU1My0zLjA3OSA1MC41NTMtNi44NzcgMC0zLjc5OS0yMi42MzMtNi44NzgtNTAuNTUzLTYuODc4LTI3LjkyIDAtNTAuNTU0IDMuMDc5LTUwLjU1NCA2Ljg3OCAwIDMuNzk4IDIyLjYzNCA2Ljg3NyA1MC41NTQgNi44NzdaTTU1Ljk4NSAxMTkuNDM5YzE2Ljc3MiAwIDMwLjM2OC0xLjg0OSAzMC4zNjgtNC4xMzFzLTEzLjU5Ni00LjEzMS0zMC4zNjgtNC4xMzFjLTE2Ljc3MSAwLTMwLjM2NyAxLjg0OS0zMC4zNjcgNC4xMzFzMTMuNTk2IDQuMTMxIDMwLjM2NyA0LjEzMVoiIGZpbGw9IiMzRjNENTYiLz48cGF0aCBkPSJNODMuMTM4IDExMS44MjVjMTYuMDc3IDQuMTA4IDQ2Ljk4LTUuMzU5IDUwLjM3NC0xNi4wNzdNNTUuODA3IDQ2LjI2NnMyMy4yMjItNi40MyAyNC42NTEgMTQuMjljMS40MyAyMC43MjItMTkuMTE0IDI2LjYxNy0zLjAzNyAzMC43MjZNMzMuMzcgOTUuOTc3czYuOTgtMS45MzMgNy40MSA0LjI5NWMuNDMgNi4yMjgtNS43NDUgOC0uOTEzIDkuMjM1IiBzdHJva2U9IiMyRjJFNDEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PHBhdGggZD0ibTEzOS42MDMgMTAwLjYxNC0xLjQwNyA4Ljk4NHMtNi45MjggMy42OC0yLjA1NyAzLjc4OWM0Ljg3MS4xMDggMjcuODE5IDAgMjcuODE5IDBzNC40MzggMC0yLjU5OC0zLjg5N2wtMS40MDctOS40MTgtMjAuMzUuNTQyWiIgZmlsbD0iIzJGMkU0MSIvPjxwYXRoIG9wYWNpdHk9Ii4xIiBkPSJNMTM1LjE1OSAxMTMuMjg5YzEuMTA3LS45ODQgMy4wMzctMi4wMSAzLjAzNy0yLjAxbDEuNDA3LTguOTg0IDIwLjM1LjAxOSAxLjQwNyA4Ljg1N2MxLjY0MS45MDkgMi42NTggMS42MDUgMy4yNTIgMi4xNC45MDQtLjIwNyAxLjg5MS0uOTczLTMuMjUyLTMuODIxbC0xLjQwNy05LjQxOC0yMC4zNS41NDItMS40MDcgOC45ODRzLTUuODIxIDMuMDkzLTMuMDM3IDMuNjkxWiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0xOTIuMjg4IDM3Ljk5M2gtODUuMjM3YTMuMjIzIDMuMjIzIDAgMCAwLTMuMjIzIDMuMjI0djU3LjQxOGEzLjIyNCAzLjIyNCAwIDAgMCAzLjIyMyAzLjIyNGg4NS4yMzdhMy4yMjQgMy4yMjQgMCAwIDAgMy4yMjQtMy4yMjRWNDEuMjE3YTMuMjI0IDMuMjI0IDAgMCAwLTMuMjI0LTMuMjI0WiIgZmlsbD0iIzJGMkU0MSIvPjxwYXRoIGQ9Ik0xOTIuNDI3IDQxLjQwM2gtODUuNTE0djQ3Ljg0NWg4NS41MTRWNDEuNDAzWiIgZmlsbD0iI0Y1RjVGQyIvPjxwYXRoIGQ9Ik0xNDkuNjcgNDAuNDI5YS41NDEuNTQxIDAgMSAwIDAtMS4wODIuNTQxLjU0MSAwIDAgMCAwIDEuMDgyWiIgZmlsbD0iI0YyRjJGMiIvPjxwYXRoIGQ9Ik0xOTUuNTEyIDkzLjAzNnY1LjU5OWEzLjIyMyAzLjIyMyAwIDAgMS0zLjIyNCAzLjIyM2gtODUuMjM3YTMuMjEyIDMuMjEyIDAgMCAxLTIuOTc4LTEuOTkgMy4yMjMgMy4yMjMgMCAwIDEtLjI0NS0xLjIzM3YtNS41OTloOTEuNjg0Wk0xNzMuNTkyIDExOS4yMzJ2MS4wODNoLTU4LjIzNnYtLjg2N2wuMDgtLjIxNiAxLjQzNS0zLjg5N2g1NS41M2wxLjE5MSAzLjg5N1pNMTk2LjAwMyAxMTguMTcyYy0uMTA2LjQ1NC0uNTA2LjkzMi0xLjQxMSAxLjM4NS0zLjI0NyAxLjYyMy05Ljg1MS0uNDMzLTkuODUxLS40MzNzLTUuMDg3LS44NjYtNS4wODctMy4xMzljLjE0My0uMDk4LjI5Mi0uMTg3LjQ0Ni0uMjY2IDEuMzY1LS43MjIgNS44OTItMi41MDQgMTMuOTE5LjA3NmEzLjM0MiAzLjM0MiAwIDAgMSAxLjUyNSAxYy4zMjYuMzguNTgxLjg2My40NTkgMS4zNzdaIiBmaWxsPSIjMkYyRTQxIi8+PHBhdGggb3BhY2l0eT0iLjEiIGQ9Ik0xOTYuMDAzIDExOC4xNzJjLTMuOTc0IDEuNTIzLTcuNTE3IDEuNjM3LTExLjE1My0uODg4LTEuODM0LTEuMjczLTMuNS0xLjU4OC00Ljc1LTEuNTY1IDEuMzY1LS43MjIgNS44OTItMi41MDQgMTMuOTE5LjA3NmEzLjM0MiAzLjM0MiAwIDAgMSAxLjUyNSAxYy4zMjYuMzguNTgxLjg2My40NTkgMS4zNzdaIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTE5MS4wMiAxMTcuMjg0Yy43NzcgMCAxLjQwNy0uMTk0IDEuNDA3LS40MzMgMC0uMjQtLjYzLS40MzMtMS40MDctLjQzM3MtMS40MDcuMTkzLTEuNDA3LjQzM2MwIC4yMzkuNjMuNDMzIDEuNDA3LjQzM1pNMTQ5LjY3IDk5LjUzMWEyLjA1NyAyLjA1NyAwIDEgMCAwLTQuMTE0IDIuMDU3IDIuMDU3IDAgMCAwIDAgNC4xMTRaIiBmaWxsPSIjRjJGMkYyIi8+PHBhdGggb3BhY2l0eT0iLjEiIGQ9Ik0xNzMuNTkyIDExOS4yMzJ2MS4wODJoLTU4LjIzNnYtLjg2NmwuMDgtLjIxNmg1OC4xNTZaIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTU3LjA1NyAyOC40MDNIMTkuOTAxdjQzLjIzaDM3LjE1NnYtNDMuMjNaIiBmaWxsPSIjMkYyRTQxIi8+PHBhdGggZD0iTTYwLjgwOCAyNC4xMTZIMTYuMTV2MTUuMzYyaDQ0LjY1OFYyNC4xMTVaTTYwLjgwOCA0Mi4zMzZIMTYuMTVWNTcuN2g0NC42NThWNDIuMzM2Wk02MC44MDggNjAuNTU3SDE2LjE1djE1LjM2Mmg0NC42NThWNjAuNTU3WiIgZmlsbD0iIzNGM0Q1NiIvPjxwYXRoIG9wYWNpdHk9Ii40IiBkPSJNNTEuODc3IDI2Ljc5NWgtMi44NTh2Mi44NThoMi44NTh2LTIuODU4WiIgZmlsbD0iIzJDMzdGMSIvPjxwYXRoIG9wYWNpdHk9Ii44IiBkPSJNNTUuOTg1IDI2Ljc5NWgtMi44NTh2Mi44NThoMi44NTh2LTIuODU4WiIgZmlsbD0iIzJDMzdGMSIvPjxwYXRoIGQ9Ik02MC4wOTQgMjYuNzk1aC0yLjg1OHYyLjg1OGgyLjg1OHYtMi44NThaIiBmaWxsPSIjMkMzN0YxIi8+PHBhdGggb3BhY2l0eT0iLjQiIGQ9Ik01MS44NzcgNDQuODM3aC0yLjg1OHYyLjg1OGgyLjg1OHYtMi44NThaIiBmaWxsPSIjMkMzN0YxIi8+PHBhdGggb3BhY2l0eT0iLjgiIGQ9Ik01NS45ODUgNDQuODM3aC0yLjg1OHYyLjg1OGgyLjg1OHYtMi44NThaIiBmaWxsPSIjMkMzN0YxIi8+PHBhdGggZD0iTTYwLjA5NCA0NC44MzdoLTIuODU4djIuODU4aDIuODU4di0yLjg1OFoiIGZpbGw9IiMyQzM3RjEiLz48cGF0aCBvcGFjaXR5PSIuNCIgZD0iTTUxLjg3NyA2Mi44OGgtMi44NTh2Mi44NTdoMi44NThWNjIuODhaIiBmaWxsPSIjMkMzN0YxIi8+PHBhdGggb3BhY2l0eT0iLjgiIGQ9Ik01NS45ODUgNjIuODhoLTIuODU4djIuODU3aDIuODU4VjYyLjg4WiIgZmlsbD0iIzJDMzdGMSIvPjxwYXRoIGQ9Ik02MC4wOTQgNjIuODhoLTIuODU4djIuODU3aDIuODU4VjYyLjg4WiIgZmlsbD0iIzJDMzdGMSIvPjxwYXRoIGQ9Ik01Ny4wNTcgMTEwLjIxN2M3Ljc5NCAwIDE0LjExMi02LjMxOCAxNC4xMTItMTQuMTEyIDAtNy43OTQtNi4zMTgtMTQuMTEyLTE0LjExMi0xNC4xMTItNy43OTQgMC0xNC4xMTIgNi4zMTgtMTQuMTEyIDE0LjExMiAwIDcuNzk0IDYuMzE4IDE0LjExMiAxNC4xMTIgMTQuMTEyWiIgZmlsbD0iIzJGMkU0MSIvPjxwYXRoIGQ9Ik01NC45MTMgMTA3LjE4aC00LjI4N3Y3LjY4Mmg0LjI4N3YtNy42ODJaTTYzLjQ4OCAxMDcuMThINTkuMnY3LjY4Mmg0LjI4N3YtNy42ODJaIiBmaWxsPSIjMkYyRTQxIi8+PHBhdGggZD0iTTU0LjE5OSAxMTYuMjkxYzEuOTczIDAgMy41NzMtLjYgMy41NzMtMS4zNCAwLS43NC0xLjYtMS4zNC0zLjU3My0xLjM0LTEuOTczIDAtMy41NzMuNi0zLjU3MyAxLjM0IDAgLjc0IDEuNiAxLjM0IDMuNTczIDEuMzRaTTYyLjc3MyAxMTYuMTEyYzEuOTczIDAgMy41NzMtLjYgMy41NzMtMS4zNCAwLS43NC0xLjYtMS4zNC0zLjU3My0xLjM0LTEuOTczIDAtMy41NzIuNi0zLjU3MiAxLjM0IDAgLjc0IDEuNiAxLjM0IDMuNTcyIDEuMzRaIiBmaWxsPSIjMkYyRTQxIi8+PHBhdGggZD0iTTU3LjQxNCA5Ny4zNTVhNC44MjMgNC44MjMgMCAxIDAgMC05LjY0NiA0LjgyMyA0LjgyMyAwIDAgMCAwIDkuNjQ2WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik01Ny40MTQgOTQuMTRhMS42MDggMS42MDggMCAxIDAgMC0zLjIxNSAxLjYwOCAxLjYwOCAwIDAgMCAwIDMuMjE1WiIgZmlsbD0iIzNGM0Q1NiIvPjxwYXRoIGQ9Ik00My4zNjggODIuOTgxYy0xLjE0LTUuMTAzIDIuNTAzLTEwLjI2IDguMTM2LTExLjUxNyA1LjYzMi0xLjI1OCAxMS4xMjIgMS44NiAxMi4yNjIgNi45NjMgMS4xNCA1LjEwMy0yLjU5NCA2Ljk4NS04LjIyNyA4LjI0Mi01LjYzMiAxLjI1OC0xMS4wMzIgMS40MTUtMTIuMTcxLTMuNjg4WiIgZmlsbD0iIzJDMzdGMSIvPjxwYXRoIGQ9Ik03MC4yOTMgOTMuMjljMy41ODItMS41MzMgNi4wOTYtMy42ODggNS42MTUtNC44MTMtLjQ4MS0xLjEyNC0zLjc3Ni0uNzkzLTcuMzU4Ljc0LTMuNTgzIDEuNTM0LTYuMDk3IDMuNjg5LTUuNjE2IDQuODEzLjQ4MiAxLjEyNSAzLjc3Ni43OTQgNy4zNTktLjc0Wk00My44NTUgMTAyLjc1OGMzLjU4My0xLjUzMyA2LjA5Ny0zLjY4OCA1LjYxNS00LjgxMy0uNDgxLTEuMTI1LTMuNzc2LS43OTMtNy4zNTguNzQtMy41ODMgMS41MzMtNi4wOTcgMy42ODgtNS42MTYgNC44MTMuNDgyIDEuMTI1IDMuNzc2Ljc5MyA3LjM1OS0uNzRaIiBmaWxsPSIjMkYyRTQxIi8+PHBhdGggZD0iTTY1LjI3NCAxMDAuMjE0YzAgMS4zODEtMy41NTYgNC4xMDgtNy41MDIgNC4xMDgtMy45NDcgMC03LjY4Mi0yLjU0OS03LjY4Mi0zLjkzIDAtMS4zODEgMy43MzUtMS4wNzIgNy42ODItMS4wNzIgMy45NDYgMCA3LjUwMi0uNDg4IDcuNTAyLjg5NFoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTUwIDUyLjY2N2MtNy4zNiAwLTEzLjMzMyA1Ljk3My0xMy4zMzMgMTMuMzMzUzE0Mi42NCA3OS4zMzMgMTUwIDc5LjMzMyAxNjMuMzMzIDczLjM2IDE2My4zMzMgNjYgMTU3LjM2IDUyLjY2NyAxNTAgNTIuNjY3Wm0xLjMzMyAyMGgtMi42NjZWNzBoMi42NjZ2Mi42NjdabTAtNS4zMzRoLTIuNjY2di04aDIuNjY2djhaIiBmaWxsPSIjRjgzNDNGIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjUpIiBkPSJNMCAwaDIwMHYxMjQuODY1SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+Cg==',
                alt: 'Error',
              })),
            (0, i.Z)(
              'div',
              { className: d },
              void 0,
              (0, i.Z)(l.Dx, {}, void 0, a('errors.wrong')),
              (0, i.Z)('p', {}, void 0, a('errors.globalDescription'))
            ),
            (0, i.Z)(
              l.zx,
              { color: 'primary', size: 'middle', onClick: m },
              void 0,
              a('general.refresh')
            )
          );
        };
    },
    87384: function (e, t, n) {
      'use strict';
      n.d(t, {
        a: function () {
          return p;
        },
      });
      var r = n(87462),
        i = n(22928),
        o = n(67294),
        a = n(61873),
        s = n(86485),
        l = n(69088),
        u = n(99753),
        c = n(64517),
        d = 'LocalError_localError__35sRY',
        m = 'LocalError_localErrorModalFooter__1NIt-',
        p = function (e) {
          var t = e.details,
            n = e.message,
            p = e.height,
            g = (0, s.$G)().t,
            f = (0, u.d)(),
            v = (0, o.useMemo)(
              function () {
                return { height: p };
              },
              [p]
            ),
            h = (0, o.useCallback)(
              function (e) {
                e.preventDefault(), f.openModal();
              },
              [f]
            );
          return (0, i.Z)(
            o.Fragment,
            {},
            void 0,
            (0, i.Z)(
              'div',
              { style: v, className: d },
              void 0,
              (0, i.Z)(l.J, {
                category: 'modern',
                name: 'error',
                size: '1.25rem',
                color: (0, a.MX)('--color-danger'),
              }),
              (0, i.Z)(
                'p',
                {},
                void 0,
                n || g('errors.wrong'),
                ' ',
                t
                  ? (0, i.Z)(
                      'a',
                      { href: '#', onClick: h },
                      void 0,
                      g('general.moreInfo')
                    )
                  : null
              )
            ),
            o.createElement(
              u.u,
              (0, r.Z)({}, f, { width: '25rem' }),
              t,
              (0, i.Z)(
                'footer',
                { className: m },
                void 0,
                (0, i.Z)(
                  c.z,
                  { color: 'primary', onClick: f.closeModal },
                  void 0,
                  g('general.ok')
                )
              )
            )
          );
        };
    },
    40262: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(22928),
        i = (n(67294), n(44734)),
        o = {
          defaults: [
            { value: 'test_1', values: ['ACTIVE'] },
            { value: 'test_2', values: ['INACTIVE'] },
          ],
          list: [
            {
              label: 'Test 1',
              value: 'test_1',
              values: [{ label: 'Active', value: 'ACTIVE' }],
            },
            {
              label: 'Test 2',
              value: 'test_2',
              values: [{ label: 'In active', value: 'INACTIVE' }],
            },
          ],
          categories: [
            {
              items: ['test_1'],
              name: 'Cat 1',
              _id: '5b61995d92e31f58864e0fbf',
            },
          ],
        },
        a = function (e) {
          console.log('Filter changed', e);
        },
        s = {
          Default: function () {
            return (0, r.Z)(i.w, { filters: o.list, onChange: a });
          },
          Modern: function () {
            return (0, r.Z)(i.w, {
              variant: 'modern',
              filters: o.list,
              onChange: a,
            });
          },
          WithDefaults: function () {
            return (0, r.Z)(i.w, {
              defaultFilters: o.defaults,
              filters: o.list,
              onChange: a,
            });
          },
          GroupedByCategories: function () {
            return (0, r.Z)(i.w, {
              filters: o.list,
              categories: o.categories,
              onChange: a,
            });
          },
        };
    },
    44734: function (e, t, n) {
      'use strict';
      n.d(t, {
        w: function () {
          return xe;
        },
      });
      var r,
        i = n(22928),
        o = n(87462),
        a = n(4942),
        s = n(70885),
        l = n(42982),
        u = n(67294),
        c = n(94184),
        d = n.n(c),
        m = n(8686),
        p = n(86485),
        g = n(61873),
        f = n(74416),
        v = n(64517),
        h = n(61719),
        b = n(4174),
        y = n(53181),
        T = n(71669),
        _ = 'FilterList_list__2iFRE',
        M = 'FilterList_listInputSearch__Hl3x5',
        N = 'FilterList_listItems__3Tv8l',
        w = 'FilterList_listItemsItem__2T7fe',
        C = 'FilterList_listContent__ADeB-',
        Z = function (e) {
          var t = e.className,
            n = e.list,
            r = void 0 === n ? [] : n,
            a = e.activeValue,
            c = e.disabledList,
            m = e.onChange,
            f = e.height,
            v = void 0 === f ? 'auto' : f,
            Z = e.categories,
            D = (0, p.$G)().t,
            E = (0, u.useState)(''),
            I = (0, s.Z)(E, 2),
            O = I[0],
            L = I[1],
            A = (0, u.useRef)([]),
            S = (0, u.useRef)(!1),
            k = (0, u.useMemo)(
              function () {
                return { height: v };
              },
              [v]
            ),
            j = (0, u.useCallback)(function (e) {
              e && A.current.push(e);
            }, []),
            P = (0, u.useMemo)(
              function () {
                var e = r.map(function (e) {
                  return (function (e, t, n) {
                    return {
                      id: e.value,
                      children: e.label,
                      active: !!t && t === e.value,
                      disabled:
                        !!n &&
                        n.some(function (t) {
                          return t.value === e.value;
                        }),
                    };
                  })(e, null == a ? void 0 : a.value, c);
                });
                return O
                  ? e.filter(function (e) {
                      return e.children.toLowerCase().includes(O.toLowerCase());
                    })
                  : e;
              },
              [null == a ? void 0 : a.value, c, r, O]
            ),
            x = (0, u.useMemo)(
              function () {
                if (Z && P) {
                  var e = (0, g.Pn)(P, 'id'),
                    t = Z.reduce(function (t, n) {
                      var r = n.items.reduce(function (t, r) {
                        return (
                          e[r] &&
                            (t.push(e[r]), 'Other' !== n.name && delete e[r]),
                          t
                        );
                      }, []);
                      return (
                        r.length &&
                          'Other' !== n.name &&
                          t.push({ name: n.name, list: r }),
                        t
                      );
                    }, []);
                  return [].concat((0, l.Z)(t), [
                    {
                      name: D('general.other'),
                      list: P.filter(function (t) {
                        return !!e[t.id];
                      }),
                    },
                  ]);
                }
              },
              [P, Z, D]
            ),
            R = (0, u.useCallback)(function (e) {
              L(e.target.value);
            }, []),
            z = (0, u.useCallback)(
              function (e) {
                var t = r.find(function (t) {
                  return t.value === e.id;
                });
                null == m || m(t);
              },
              [r, m]
            ),
            F = (0, u.useMemo)(
              function () {
                return { className: N, classNameItem: w, onChange: z };
              },
              [z]
            );
          return (
            (0, u.useEffect)(
              function () {
                if (
                  A.current.length &&
                  S.current &&
                  (A.current.forEach(function (e) {
                    O ? e.open() : e.close();
                  }),
                  !O)
                ) {
                  var e,
                    t,
                    n =
                      null == x
                        ? void 0
                        : x.reduce(function (e, t, n) {
                            return (
                              t.list.some(function (e) {
                                return e.id === (null == a ? void 0 : a.value);
                              }) && (e = n),
                              e
                            );
                          }, null);
                  if ('number' == typeof n)
                    null === (e = A.current) ||
                      void 0 === e ||
                      null === (t = e[n]) ||
                      void 0 === t ||
                      t.open();
                }
              },
              [O]
            ),
            (0, u.useEffect)(function () {
              return (
                (S.current = !0),
                function () {
                  S.current = !1;
                }
              );
            }, []),
            (0, i.Z)(
              T.l,
              { className: d()(_, t) },
              void 0,
              (0, i.Z)(h.I, {
                type: 'search',
                placeholder: D('general.search'),
                className: M,
                value: O,
                onChange: R,
              }),
              (0, i.Z)(
                'div',
                { className: C, style: k },
                void 0,
                null == x
                  ? void 0
                  : x.map(function (e, t) {
                      var n = e.list.some(function (e) {
                        return e.id === (null == a ? void 0 : a.value);
                      });
                      return u.createElement(
                        b.U,
                        { key: t, title: e.name, defaultIsOpen: n, ref: j },
                        u.createElement(y.s, (0, o.Z)({}, F, { list: e.list }))
                      );
                    }),
                x ? null : u.createElement(y.s, (0, o.Z)({}, F, { list: P }))
              )
            )
          );
        },
        D = n(12051),
        E = n(44957),
        I = n(62596),
        O = function (e) {
          if ('>' === e) return I.Z.t('general.moreThan');
          if ('<' === e) return I.Z.t('general.lessThan');
          if (!e) return '';
          var t = parseInt(e, 10);
          if (Number.isNaN(t)) return e;
          var n = t / 60 / 60;
          return n < 1 ? ''.concat(t / 60, ' min') : ''.concat(n, ' h');
        },
        L = function (e) {
          if (e === I.Z.t('general.moreThan')) return '>';
          if (e === I.Z.t('general.lessThan')) return '<';
          if (!e) return '';
          var t = parseFloat(e);
          return Number.isNaN(t)
            ? e
            : e.trim().endsWith('min')
            ? String(60 * t)
            : String(3600 * t);
        },
        A = n(45987),
        S = n(98391),
        k = n(69088),
        j = n(99753),
        P = n(4490),
        x = n(6002),
        R = 'FilterCheckboxList_checkboxList__GuOcI',
        z = 'FilterCheckboxList_checkboxListPagination__ClF9E',
        F = 'FilterCheckboxList_checkboxListHeader__3gJO9',
        U = 'FilterCheckboxList_checkboxListControls__2ndHA',
        G = 'FilterCheckboxList_checkboxListControlsIcon__337t9',
        Y = 'FilterCheckboxList_checkboxListControlsFilters__1UmKx',
        V = 'FilterCheckboxList_checkboxListControlsFilterButton__1d8d8',
        W = 'FilterCheckboxList_isActive__Guk6G',
        H = 'FilterCheckboxList_checkboxListRow__wXzgE',
        B = 'FilterCheckboxList_checkboxListRowDesc__rwxkf',
        q = 'FilterCheckboxList_checkboxListRowEdit__3ndUa',
        Q = 'FilterCheckboxList_checkboxListContent__1YAN8',
        J = 'FilterCheckboxList_checkboxListPaginationWrapper__2n4bV',
        X = 'FilterCheckboxList_checkboxListPaginationChildren__3qYUX',
        $ = 'FilterCheckboxList_checkboxListDropdown__2iF_v',
        K = 'FilterCheckboxList_checkboxListDropdownListIcon__3jYud',
        ee = 'FilterCheckboxList_checkboxListDropdownContent__cWjIO',
        te = 'FilterCheckboxList_checkboxListDropdownContentButton__11VHp',
        ne = 'FilterCheckboxList_checkboxListDropdownContentTitle__S24r3',
        re = 'FilterCheckboxList_checkboxListDropdownContentList__6UV6I',
        ie = 'FilterCheckboxList_checkboxListGroupModalInputBox__URmUb',
        oe = 'FilterCheckboxList_checkboxListGroupModalRow__15_sV',
        ae = 'FilterCheckboxList_checkboxListGroupModalContentTitle__4d8Kk',
        se = 'FilterCheckboxList_checkboxListGroupModalContent__10vQD',
        le = 'FilterCheckboxList_checkboxListGroupModalContentRow__3A0V_',
        ue = n(19501),
        ce = n(87598),
        de = function (e) {
          return function () {
            return I.Z.t(e);
          };
        },
        me =
          (ue.Ry({
            name: ue.Z_().required(de('errors.required')),
            description: ue.Z_().required(de('errors.required')),
            deltaKey: ue
              .nK()
              .required(de('errors.required'))
              .oneOf(Object.keys(ce.ZP.OPERATORS)),
            metric: ue
              .nK()
              .required(de('errors.required'))
              .oneOf(ce.ZP.ALTERATION_METRIC),
            deltaValue: ue
              .Rx()
              .nullable()
              .typeError(de('errors.number'))
              .required(de('errors.required')),
            from: ue
              .Rx()
              .nullable()
              .typeError(de('errors.number'))
              .required(de('errors.required')),
            to: ue
              .Rx()
              .nullable()
              .typeError(de('errors.number'))
              .required(de('errors.required')),
            filters: ue.IX().of(ue.Ry({ value: ue.Z_(), values: ue.IX() })),
          }),
          ue.Ry({
            name: ue.Z_().required(I.Z.t('errors.required')),
            asMaster: ue.O7(),
          }),
          ue.Ry({ label: ue.Z_().required(I.Z.t('errors.required')) })),
        pe = n(81683);
      function ge(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ge(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ge(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ve = function (e) {
          var t,
            n = e.onClose,
            a = e.label,
            l = e.list,
            c = e.onSubmit,
            d = e.defaultLabel,
            m = void 0 === d ? '' : d,
            g = e.onDelete,
            f = (0, p.$G)().t,
            b = (0, u.useState)(function () {
              return l;
            }),
            y = (0, s.Z)(b, 2),
            _ = y[0],
            M = y[1],
            N = (0, j.d)(),
            w = (0, T.c)({ schema: me, defaultValues: { label: m } }),
            C = w.register,
            Z = w.handleSubmit,
            D = w.formState.errors,
            E = (0, u.useCallback)(function (e) {
              return function () {
                M(function (t) {
                  return t.filter(function (t, n) {
                    return n !== e;
                  });
                });
              };
            }, []),
            I = (0, u.useCallback)(
              function (e) {
                n(),
                  c(
                    fe(
                      fe({}, e),
                      {},
                      {
                        value: _.map(function (e) {
                          return e.value;
                        }),
                      }
                    )
                  );
              },
              [n, c, _]
            ),
            O = (0, u.useCallback)(
              function () {
                g &&
                  (N.closeModal(),
                  n(),
                  g({
                    label: m,
                    value: _.map(function (e) {
                      return e.value;
                    }),
                  }));
              },
              [N, _, m, n, g]
            );
          return (0, i.Z)(
            u.Fragment,
            {},
            void 0,
            u.createElement(
              j.u,
              (0, o.Z)({}, e, { usePortals: !1, width: '23.75rem' }),
              (0, i.Z)(
                T.l,
                { onSubmit: Z(I) },
                void 0,
                (0, i.Z)(
                  pe.W,
                  {
                    htmlFor: 'groups-label',
                    label: f('forms.title'),
                    error:
                      null == D || null === (t = D.label) || void 0 === t
                        ? void 0
                        : t.message,
                    className: ie,
                  },
                  void 0,
                  u.createElement(
                    h.I,
                    (0, o.Z)({ id: 'groups-label' }, C('label'))
                  )
                ),
                (0, i.Z)(
                  'div',
                  { className: se },
                  void 0,
                  (0, i.Z)('h1', { className: ae }, void 0, a),
                  _.map(function (e, t) {
                    return (0,
                    i.Z)('div', { className: le }, t, e.label, _.length > 2 ? (0, i.Z)(k.J, { as: 'button', type: 'button', name: 'icon-trash', size: '0.75rem', onClick: E(t) }) : null);
                  })
                ),
                (0, i.Z)(
                  'div',
                  { className: oe },
                  void 0,
                  g
                    ? (0, i.Z)(
                        v.z,
                        {
                          color: 'danger',
                          variant: 'outlined',
                          onClick: N.openModal,
                        },
                        void 0,
                        r ||
                          (r = (0, i.Z)(k.J, {
                            name: 'icon-trash',
                            size: '0.75rem',
                          })),
                        f('general.delete'),
                        ' ',
                        f('general.group')
                      )
                    : null
                ),
                (0, i.Z)(
                  'div',
                  { className: oe },
                  void 0,
                  (0, i.Z)(
                    v.z,
                    { color: 'primary', type: 'submit' },
                    void 0,
                    f('general.save')
                  ),
                  (0, i.Z)(
                    v.z,
                    { color: 'danger', variant: 'outlined', onClick: n },
                    void 0,
                    f('general.cancel')
                  )
                )
              )
            ),
            u.createElement(
              P.WZ,
              (0, o.Z)({ usePortals: !1 }, N, { onConfirm: O }),
              f('filter.confirmGroupDeleteContent')
            )
          );
        },
        he = function (e) {
          var t = e.label,
            n = e.groups,
            r = void 0 === n ? [] : n,
            a = e.activeValues,
            l = void 0 === a ? [] : a,
            c = e.onCreate,
            d = e.onGroupClick,
            m = (0, p.$G)().t,
            g = (0, u.useState)(!0),
            h = (0, s.Z)(g, 2),
            b = h[0],
            T = h[1],
            _ = (0, j.d)(),
            M = _.openModal,
            N = _.closeModal,
            w = _.isOpen,
            C = (0, u.useRef)(!0),
            Z = (0, u.useRef)(null),
            D = (0, u.useMemo)(
              function () {
                return l.some(function (e) {
                  return e.isGroup;
                });
              },
              [l]
            ),
            E = !(null != l && l.length) || D,
            I = (null == l ? void 0 : l.length) < 2,
            O = (0, u.useCallback)(function () {
              T(function (e) {
                return !e;
              });
            }, []),
            L = (0, u.useMemo)(
              function () {
                return [
                  {
                    onClick: O,
                    disabled: E,
                    children: (0, i.Z)(
                      u.Fragment,
                      {},
                      void 0,
                      (0, i.Z)(k.J, {
                        name: 'icon-list',
                        color: '#000',
                        className: K,
                      }),
                      m('filter.addToGroup')
                    ),
                  },
                ];
              },
              [O, E, m]
            ),
            A = (0, u.useCallback)(
              function () {
                (C.current = !1), M();
              },
              [M]
            ),
            S = (0, u.useCallback)(
              function () {
                (C.current = !0), N();
              },
              [N]
            ),
            P = (0, u.useMemo)(
              function () {
                return [
                  {
                    onClick: O,
                    children: (0, i.Z)(
                      u.Fragment,
                      {},
                      void 0,
                      (0, i.Z)(k.J, { name: 'icon-back', className: K }),
                      m('general.back')
                    ),
                  },
                ];
              },
              [O, m]
            ),
            x = (0, u.useCallback)(
              function (e) {
                return function () {
                  var t;
                  null === (t = Z.current) || void 0 === t || t.toggle(), d(e);
                };
              },
              [d]
            ),
            R = (0, u.useMemo)(
              function () {
                return r.map(function (e) {
                  return {
                    id: e.value.toString(),
                    children: e.label,
                    onClick: x(e),
                  };
                });
              },
              [r, x]
            ),
            z = (0, u.useCallback)(function (e) {
              e.isVisible || T(!0);
            }, []),
            F = (0, u.useCallback)(function (e) {
              return (0,
              i.Z)(k.J, { as: 'button', name: 'icon-menu-1', onClick: e.toggle });
            }, []);
          return (0, i.Z)(
            u.Fragment,
            {},
            void 0,
            u.createElement(
              f.L,
              {
                ref: Z,
                Trigger: F,
                width: b ? '9.375rem' : '13.4375rem',
                align: 'bottom-right',
                onToggle: z,
                hideOnClick: !1,
                hideOnClickOutside: C.current,
                className: $,
              },
              b
                ? (0, i.Z)(y.s, { list: L })
                : (0, i.Z)(
                    u.Fragment,
                    {},
                    void 0,
                    (0, i.Z)(y.s, { list: P }),
                    (0, i.Z)(
                      'div',
                      { className: ee },
                      void 0,
                      null != R && R.length
                        ? (0, i.Z)(
                            u.Fragment,
                            {},
                            void 0,
                            (0, i.Z)(
                              'h2',
                              { className: ne },
                              void 0,
                              m('filter.addToExistingGroup')
                            ),
                            (0, i.Z)(y.s, { className: re, list: R })
                          )
                        : null,
                      (0, i.Z)(
                        v.z,
                        {
                          disabled: I,
                          color: 'primary',
                          className: te,
                          onClick: A,
                        },
                        void 0,
                        '+ ',
                        m('filter.createNewGroup')
                      )
                    )
                  )
            ),
            w
              ? u.createElement(
                  ve,
                  (0, o.Z)({}, _, {
                    title: m('campaigns.modalGroups.createTitle'),
                    label: t,
                    onClose: S,
                    list: l,
                    onSubmit: c,
                  })
                )
              : null
          );
        },
        be = ['name'];
      function ye(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ye(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ye(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var _e,
        Me = 'groups',
        Ne = 'selected',
        we = function (e) {
          var t = e.label,
            n = e.list,
            r = e.height,
            c = void 0 === r ? 'auto' : r,
            m = e.activeValues,
            f = void 0 === m ? [] : m,
            b = e.onChange,
            y = e.itemsPerPage,
            T = void 0 === y ? 500 : y,
            _ = e.groups,
            M = e.dimension,
            N = e.updateGroups,
            w = e.setActiveFilters,
            C = e.searchContentNode,
            Z = e.isExcludeSelected,
            D = (0, p.$G)().t,
            E = (0, u.useState)(1),
            I = (0, s.Z)(E, 2),
            O = I[0],
            L = I[1],
            $ = (0, u.useState)('all'),
            K = (0, s.Z)($, 2),
            ee = K[0],
            te = K[1],
            ne = (0, u.useState)(''),
            re = (0, s.Z)(ne, 2),
            ie = re[0],
            oe = re[1],
            ae = (0, u.useRef)(!1),
            se = null == _ ? void 0 : _[M],
            le = (0, j.d)(),
            ue = le.openModal,
            ce = (0, j.d)(),
            de = (0, u.useState)(),
            me = (0, s.Z)(de, 2),
            pe = me[0],
            ge = me[1],
            fe = n.length > T,
            ye = f.length,
            _e = (0, u.useMemo)(
              function () {
                var e,
                  t = n;
                if (
                  (null != se &&
                    se.length &&
                    (e = se.map(function (e) {
                      return Te(
                        Te({}, e),
                        {},
                        { value: e.value.join(','), isGroup: !0 }
                      );
                    })),
                  fe)
                ) {
                  var r = T * O,
                    i = r - T;
                  t = n.slice(i, r);
                }
                return ee === Me
                  ? e || []
                  : (ee === Ne &&
                      (t = n.filter(function (e) {
                        return f.some(function (t) {
                          return t.value === e.value;
                        });
                      })),
                    ie &&
                      (t = n.filter(function (e) {
                        return e.label.toLowerCase().includes(ie.toLowerCase());
                      })),
                    e && (t = [].concat((0, l.Z)(e), (0, l.Z)(n))),
                    t);
              },
              [f, O, ee, se, fe, T, n, ie]
            ),
            we = (0, u.useCallback)(function (e) {
              return function () {
                te(e);
              };
            }, []),
            Ce = (0, u.useMemo)(
              function () {
                return [
                  {
                    name: D('general.all'),
                    className: d()(V, (0, a.Z)({}, W, 'all' === ee)),
                    disabled: 'all' === ee,
                    onClick: we('all'),
                  },
                  {
                    name: D('general.groups'),
                    className: d()(V, (0, a.Z)({}, W, 'groups' === ee)),
                    disabled: 'groups' === ee,
                    onClick: we('groups'),
                  },
                  {
                    name: ''
                      .concat(D('general.selected'), ' (')
                      .concat(ye, ')'),
                    className: d()(V, (0, a.Z)({}, W, 'selected' === ee)),
                    onClick: we('selected'),
                    disabled: !ye || 'selected' === ee,
                  },
                ];
              },
              [ye, ee, we, D]
            ),
            Ze = (0, u.useMemo)(
              function () {
                if (!pe) return [];
                var e = String(pe.value).split(','),
                  t = (0, g.Pn)(n, 'value');
                return e
                  .map(function (e) {
                    return t[e];
                  })
                  .filter(Boolean);
              },
              [pe, n]
            ),
            De = (0, u.useCallback)(function (e) {
              oe(e.target.value);
            }, []),
            Ee = (0, u.useCallback)(
              function (e, t) {
                var n = e.target.checked,
                  r = _e.find(function (e) {
                    return t.value === e.value;
                  });
                if (r) {
                  var i = n
                    ? [].concat((0, l.Z)(f), [r])
                    : f.filter(function (e) {
                        return e.value !== r.value;
                      });
                  null == b || b(i);
                }
              },
              [f, _e, b]
            ),
            Ie = (0, u.useCallback)(
              function (e) {
                return function () {
                  ae.current = e;
                  var t = ae.current ? (0, l.Z)(_e) : [];
                  null == b || b(t);
                };
              },
              [_e, b]
            ),
            Oe = (0, u.useCallback)(
              function (e) {
                var t = (0, g.Pn)(e);
                return null == se
                  ? void 0
                  : se.some(function (n) {
                      return (
                        n.value.length === e.length &&
                        n.value.every(function (e) {
                          return void 0 !== t[e];
                        })
                      );
                    });
              },
              [se]
            ),
            Le = (0, u.useCallback)(
              function (e) {
                if (N)
                  if (Oe(e.value)) ue();
                  else {
                    var t = M.replace('.', '@');
                    N((0, a.Z)({}, t, [].concat((0, l.Z)(se || []), [e])));
                  }
                else console.error('ERROR: no update method');
              },
              [se, M, Oe, ue, N]
            ),
            Ae = (0, u.useCallback)(
              function (e) {
                if (N && se) {
                  var t = f.map(function (e) {
                      return e.value;
                    }),
                    n = (0, g.Pn)(t);
                  if (
                    e.value.some(function (e) {
                      return void 0 !== n[e];
                    })
                  )
                    ue();
                  else {
                    var r = M.replace('.', '@'),
                      i =
                        null == se
                          ? void 0
                          : se.map(function (n) {
                              return JSON.stringify(n.value) ===
                                JSON.stringify(e.value)
                                ? Te(
                                    Te({}, n),
                                    {},
                                    {
                                      value: [].concat(
                                        (0, l.Z)(n.value),
                                        (0, l.Z)(t)
                                      ),
                                    }
                                  )
                                : n;
                            });
                    N((0, a.Z)({}, r, i));
                  }
                } else
                  console.error('ERROR: no update method or current groups');
              },
              [f, se, M, ue, N]
            ),
            Se = (0, u.useCallback)(
              function (e) {
                return function () {
                  ge(e), ce.openModal();
                };
              },
              [ce]
            ),
            ke = (0, u.useCallback)(
              function (e) {
                if (N && se && pe) {
                  var t = M.replace('.', '@'),
                    n = se.map(function (t) {
                      return t.value.join(',') === pe.value ? e : t;
                    });
                  e.value.toString() !== pe.value &&
                    w &&
                    w(function (t) {
                      return t.map(function (t) {
                        var n,
                          r =
                            (null === (n = t.values) || void 0 === n
                              ? void 0
                              : n.map(function (t) {
                                  return Te(
                                    Te({}, t),
                                    {},
                                    {
                                      value:
                                        t.value === pe.value
                                          ? e.value.toString()
                                          : t.value,
                                    }
                                  );
                                })) || t.values;
                        return Te(Te({}, t), {}, { values: r });
                      });
                    }),
                    N((0, a.Z)({}, t, n));
                } else
                  console.error('ERROR: no update method or current groups');
              },
              [pe, se, M, w, N]
            ),
            je = (0, u.useCallback)(
              function (e) {
                if (N && se) {
                  var t = M.replace('.', '@'),
                    n = se.filter(function (t) {
                      return (
                        JSON.stringify(t.value) !== JSON.stringify(e.value)
                      );
                    });
                  N((0, a.Z)({}, t, n));
                } else
                  console.error('ERROR: no update method or current groups');
              },
              [se, M, N]
            ),
            Pe = (0, u.useMemo)(
              function () {
                return _e.map(function (e) {
                  return {
                    checked: f.some(function (t) {
                      return t.value === e.value;
                    }),
                    value: e.value,
                    children: (0, i.Z)(
                      'div',
                      { className: H },
                      void 0,
                      e.label,
                      e.isGroup
                        ? (0, i.Z)(
                            u.Fragment,
                            {},
                            void 0,
                            (0, i.Z)(
                              'span',
                              { className: B },
                              void 0,
                              D('general.group')
                            ),
                            (0, i.Z)(k.J, {
                              as: 'button',
                              name: 'icon-edit-2-icon',
                              color: '#aaa',
                              size: '1rem',
                              className: q,
                              onClick: Se(e),
                            })
                          )
                        : null
                    ),
                  };
                });
              },
              [f, _e, Se, D]
            );
          return (0, i.Z)(
            'div',
            { className: R },
            void 0,
            (0, i.Z)(
              'header',
              { className: F },
              void 0,
              (0, i.Z)(h.I, {
                type: 'search',
                placeholder: D('general.search'),
                value: ie,
                onChange: De,
              }),
              void 0 === C
                ? (0, i.Z)(he, {
                    label: t,
                    groups: se,
                    activeValues: f,
                    onCreate: Le,
                    onGroupClick: Ae,
                  })
                : C
            ),
            (0, i.Z)(
              'div',
              { className: U },
              void 0,
              (0, i.Z)(k.J, {
                as: 'button',
                type: 'button',
                name: 'icon-select-all',
                size: '1.2rem',
                color: '#888',
                className: G,
                onClick: Ie(!0),
              }),
              (0, i.Z)(k.J, {
                as: 'button',
                type: 'button',
                name: 'icon-clear-all',
                size: '1.2rem',
                color: '#888',
                className: G,
                onClick: Ie(!1),
              }),
              (0, i.Z)(
                'div',
                { className: Y },
                void 0,
                Ce.map(function (e, t) {
                  var n = e.name,
                    r = (0, A.Z)(e, be);
                  return u.createElement(v.z, (0, o.Z)({ key: t }, r), n);
                })
              )
            ),
            (0, i.Z)(
              'div',
              { className: Q },
              void 0,
              (0, i.Z)(x.s, {
                height: c,
                list: Pe,
                onChange: Ee,
                excludeSelected: Z,
              }),
              fe
                ? (0, i.Z)(
                    'div',
                    { className: J },
                    void 0,
                    D('general.showing'),
                    ' ',
                    (0, i.Z)(
                      S.t,
                      {
                        className: z,
                        currentPage: O,
                        total: n.length,
                        itemsPerPage: T,
                        onChange: L,
                      },
                      void 0,
                      (0, i.Z)(
                        'span',
                        { className: X },
                        void 0,
                        D('general.results')
                      )
                    )
                  )
                : null
            ),
            u.createElement(
              P.WB,
              (0, o.Z)({ usePortals: !1 }, le),
              D('errors.idsExist')
            ),
            ce.isOpen
              ? u.createElement(
                  ve,
                  (0, o.Z)({}, ce, {
                    title: ''
                      .concat(D('campaigns.modalGroups.editTitle'), ' ')
                      .concat(null == pe ? void 0 : pe.label),
                    defaultLabel: null == pe ? void 0 : pe.label,
                    label: t,
                    list: Ze,
                    onSubmit: ke,
                    onDelete: je,
                  })
                )
              : null
          );
        },
        Ce = n(97570),
        Ze = n(13842),
        De = 'FilterDayPart_filterDayPartHeader__1RCHh',
        Ee = 'FilterDayPart_filterDayPartCustomToggle__sFwij',
        Ie = (function () {
          for (var e = [], t = 0; t < 24; t++)
            e.push(
              { label: ''.concat(t, ':00'), value: ''.concat(t, ':00') },
              { label: ''.concat(t, ':30'), value: ''.concat(t, ':30') }
            );
          return e;
        })(),
        Oe = (function () {
          for (var e = [], t = 0; t < 24; t++)
            e.push(
              { label: ''.concat(t, ':29'), value: ''.concat(t, ':29') },
              { label: ''.concat(t, ':59'), value: ''.concat(t, ':59') }
            );
          return e;
        })(),
        Le = function (e) {
          var t = e.list,
            n = void 0 === t ? [] : t,
            r = e.customListFrom,
            o = void 0 === r ? Ie : r,
            a = e.customListTo,
            c = void 0 === a ? Oe : a,
            d = e.values,
            m = void 0 === d ? [] : d,
            f = e.onChange,
            v = (0, p.$G)().t,
            h = (0, u.useRef)(!1),
            b = (0, u.useState)(!1),
            y = (0, s.Z)(b, 2),
            T = y[0],
            _ = y[1],
            M = (0, u.useState)([o[0], c[0]]),
            N = (0, s.Z)(M, 2),
            w = N[0],
            C = N[1],
            Z = (0, s.Z)(w, 2),
            D = Z[0],
            E = Z[1],
            I = (0, u.useMemo)(
              function () {
                return (0, g.Pn)(o, 'value');
              },
              [o]
            ),
            O = (0, u.useMemo)(
              function () {
                return (0, g.Pn)(c, 'value');
              },
              [c]
            ),
            L = (0, u.useMemo)(
              function () {
                return [
                  {
                    label: ''.concat(D.label, ' - ').concat(E.label),
                    value: ''.concat(D.value, '-').concat(E.value),
                  },
                ];
              },
              [D.label, D.value, E.label, E.value]
            ),
            A = (0, u.useMemo)(
              function () {
                var e = (0, g.Pn)(m, 'value');
                return n.map(function (t) {
                  return {
                    children: t.label,
                    value: t.value,
                    checked: !!e[t.value],
                    disabled: T,
                  };
                });
              },
              [T, n, m]
            ),
            S = (0, u.useCallback)(function (e) {
              _(e.target.checked);
            }, []),
            k = (0, u.useCallback)(
              function (e, t) {
                var r = e.target.checked,
                  i = n.find(function (e) {
                    return e.value === t.value;
                  });
                if (i) {
                  var o = r
                    ? [].concat((0, l.Z)(m), [i])
                    : m.filter(function (e) {
                        return e.value !== i.value;
                      });
                  f(o);
                }
              },
              [n, f, m]
            ),
            j = (0, u.useCallback)(
              function (e) {
                var t = String(e.value).split('-'),
                  n = (0, s.Z)(t, 2),
                  r = n[0],
                  i = n[1];
                return (
                  !(!I[r] || !O[i]) &&
                  parseInt(r.replace(':', ''), 10) <
                    parseInt(i.replace(':', ''), 10)
                );
              },
              [I, O]
            ),
            P = (0, u.useCallback)(
              function (e) {
                var t = String(e[0].value).split('-'),
                  n = (0, s.Z)(t, 2),
                  r = n[0],
                  i = n[1];
                C([
                  { label: r, value: r },
                  { label: i, value: i },
                ]),
                  f(e);
              },
              [f]
            );
          return (
            (0, u.useEffect)(
              function () {
                h.current && f(T ? L : []);
              },
              [T]
            ),
            (0, u.useEffect)(function () {
              return (
                (h.current = !0),
                function () {
                  h.current = !1;
                }
              );
            }, []),
            (0, i.Z)(
              u.Fragment,
              {},
              void 0,
              (0, i.Z)(
                'header',
                { className: De },
                void 0,
                (0, i.Z)(Ce.o, {
                  label: T ? void 0 : v('filter.customInterval'),
                  name: 'custom',
                  onChange: S,
                  className: Ee,
                }),
                T
                  ? (0, i.Z)(Ze.F, {
                      from: o,
                      to: c,
                      values: L,
                      validate: j,
                      onChange: P,
                    })
                  : null
              ),
              (0, i.Z)(x.s, { list: A, onChange: k })
            )
          );
        },
        Ae = n(77402),
        Se = n(14162);
      function ke(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ke(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ke(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Pe = (function () {
          for (var e = [], t = 1; t < 11; t += 1)
            e.push({
              value: ''.concat(t, ' min'),
              label: ''.concat(t, ' min'),
            });
          for (var n = 1; n < 13; n += 1)
            e.push({ value: ''.concat(n, ' h'), label: ''.concat(n, ' h') });
          return e;
        })(),
        xe = function (e) {
          var t = e.variant,
            n = e.defaultFilters,
            r = e.filters,
            a = e.onChange,
            c = e.categories,
            h = e.itemsPerPage,
            b = void 0 === h ? 500 : h,
            y = e.startNode,
            T = e.endNode,
            _ = e.className,
            M = e.classNameFilterDropdown,
            N = e.classNameFilterDropdownLayout,
            w = e.groups,
            C = e.updateGroups,
            I = e.isAddFilterVisible,
            A = void 0 === I || I,
            S = e.isRemovable,
            k = void 0 === S || S,
            j = e.searchContentNode,
            P = e.isDimensionsLoading,
            x = void 0 !== P && P,
            R = (0, p.$G)().t,
            z = (0, u.useRef)(!1),
            F = (0, u.useMemo)(
              function () {
                return [
                  {
                    value: R('general.moreThan'),
                    label: R('general.moreThan'),
                  },
                  {
                    value: R('general.lessThan'),
                    label: R('general.lessThan'),
                  },
                ].concat((0, l.Z)(Pe));
              },
              [R]
            ),
            U = (0, u.useState)(function () {
              if (!n) return [];
              var e = (0, g.Pn)(r, 'value');
              return n.reduce(function (t, n) {
                var r = e[n.value],
                  i = null == w ? void 0 : w[n.value.replace('.', '@')];
                if (null != n && n.values) {
                  var o,
                    a = (0, g.Pn)(n.values),
                    s =
                      null == i
                        ? void 0
                        : i.find(function (e) {
                            return void 0 !== a[e.value.join(',')];
                          }),
                    u = je(
                      je({}, r),
                      {},
                      {
                        values:
                          (null == r || null === (o = r.values) || void 0 === o
                            ? void 0
                            : o.filter(function (e) {
                                return void 0 !== a[e.value];
                              })) || [],
                        invert: null == r ? void 0 : r.invert,
                      }
                    );
                  if (s) {
                    var c = je(je({}, s), {}, { value: s.value.join(',') });
                    u.values = [c].concat((0, l.Z)(u.values));
                  }
                  null != u && u.value
                    ? t.push(u)
                    : console.warn(
                        'This filter item "'.concat(
                          n.value,
                          '" skipped, because there is no dimension for it'
                        )
                      );
                }
                return t;
              }, []);
            }),
            G = (0, s.Z)(U, 2),
            Y = G[0],
            V = G[1],
            W = (0, u.useState)(!1),
            H = (0, s.Z)(W, 2),
            B = H[0],
            q = H[1],
            Q = (0, u.useCallback)(function (e, t) {
              var n,
                r =
                  'string' == typeof (null == e ? void 0 : e.value)
                    ? null == e || null === (n = e.value) || void 0 === n
                      ? void 0
                      : n.split('-')
                    : [];
              if (!r.length || ('to' === t && r.length < 2)) return !1;
              var i = parseInt(L(r[0]), 10),
                o = parseInt(L(r[1]), 10);
              return !(o <= i || i >= o);
            }, []),
            J = (0, u.useMemo)(
              function () {
                return w
                  ? Object.entries(w).reduce(function (e, t) {
                      var n = (0, s.Z)(t, 2),
                        r = n[0],
                        i = n[1];
                      return (e[r.replace('@', '.')] = i), e;
                    }, {})
                  : w;
              },
              [w]
            ),
            X = (0, u.useMemo)(
              function () {
                if (!c) return r;
                var e = (0, g.Pn)(r, 'value'),
                  t = c.reduce(function (t, n) {
                    if ('Other' !== n.name) {
                      var r = n.items.filter(function (t) {
                        return !!e[t];
                      });
                      t.push.apply(t, (0, l.Z)(r));
                    }
                    return t;
                  }, []);
                return (0, g.lI)(r, t, 'value');
              },
              [c, r]
            ),
            $ = (0, u.useMemo)(
              function () {
                return (0, g.Pn)(X, 'value');
              },
              [X]
            ),
            K = (0, u.useCallback)(
              function () {
                var e,
                  t = je(je({}, X[0]), {}, { values: [] });
                if (!Y.length) return t;
                var n = (0, g.Pn)(Y, 'value'),
                  r =
                    null ===
                      (e = X.filter(function (e) {
                        return !n[e.value];
                      })) || void 0 === e
                      ? void 0
                      : e[0];
                return r ? je(je({}, r), {}, { values: [] }) : t;
              },
              [Y, X]
            ),
            ee = (0, u.useCallback)(
              function () {
                (z.current = !0),
                  V(function (e) {
                    var t = K();
                    return t ? [].concat((0, l.Z)(e), [t]) : e;
                  });
              },
              [K]
            ),
            te = (0, u.useCallback)(function (e) {
              return function (t) {
                V(function (n) {
                  return n.map(function (n, r) {
                    return r !== e ? n : je(je({}, t), {}, { values: [] });
                  });
                });
              };
            }, []),
            ne = (0, u.useCallback)(function (e) {
              return function (t) {
                V(function (n) {
                  return n.map(function (n, r) {
                    return r !== e ? n : je(je({}, n), {}, { values: t });
                  });
                });
              };
            }, []),
            re = (0, u.useCallback)(
              function (e) {
                return function (t) {
                  var n = null != t && t.length ? t[0] : void 0,
                    r = n ? n.value.split('-') : [],
                    i = (0, s.Z)(r, 2),
                    o = i[0],
                    a = i[1],
                    l = [L(o), L(a)].filter(Boolean);
                  ne(e)(
                    n
                      ? [je(je({}, n), {}, { value: ''.concat(l.join('-')) })]
                      : []
                  );
                };
              },
              [ne]
            ),
            ie = (0, u.useCallback)(function (e) {
              var t = null != e && e.length ? e[0] : void 0,
                n = t ? String(t.value).split('-') : [],
                r = (0, s.Z)(n, 2),
                i = r[0],
                o = r[1],
                a = [O(i), O(o)].filter(Boolean);
              return t
                ? [je(je({}, t), {}, { value: ''.concat(a.join('-')) })]
                : [];
            }, []),
            oe = (0, u.useCallback)(function (e) {
              return function () {
                return V(function (t) {
                  return t.filter(function (t, n) {
                    return n !== e;
                  });
                });
              };
            }, []),
            ae = (0, u.useCallback)(
              function (e) {
                var t = e.isVisible;
                t ||
                  ((z.current = !1),
                  V(function (e) {
                    return e
                      .map(function (e) {
                        return e.invert ? e : je(je({}, e), {}, { invert: B });
                      })
                      .filter(function (e) {
                        var t;
                        return !(
                          null == e ||
                          null === (t = e.values) ||
                          void 0 === t ||
                          !t.length
                        );
                      });
                  })),
                  t && q(!1);
              },
              [B]
            ),
            se = (0, u.useCallback)(function (e) {
              return (e.values || [])
                .map(function (e) {
                  return e.label;
                })
                .join(', ');
            }, []);
          return (
            (0, u.useEffect)(
              function () {
                var e = Y.map(function (e) {
                  var t, n, r;
                  return {
                    value: e.value,
                    values:
                      null !==
                        (t =
                          null == e ||
                          null === (n = e.values) ||
                          void 0 === n ||
                          null === (r = n.map) ||
                          void 0 === r
                            ? void 0
                            : r.call(n, function (e) {
                                return e.value;
                              })) && void 0 !== t
                        ? t
                        : [],
                  };
                });
                a(e);
              },
              [JSON.stringify(Y)]
            ),
            (0, i.Z)(
              'div',
              {
                className: d()(Se.Z.filter, t ? Se.Z[t] : void 0, _),
                'data-testid': 'id-filter',
              },
              void 0,
              y,
              (0, i.Z)(
                'div',
                { className: Se.Z.filterContent },
                void 0,
                null == Y
                  ? void 0
                  : Y.map(function (e, n) {
                      var r,
                        a = e.label,
                        s = e.value,
                        l = e.values,
                        p = {
                          title: a,
                          content: se(e),
                          onRemove: oe(n),
                          isExcludeSelected: B,
                        },
                        g =
                          'modern' !== t
                            ? (0, Ae.Y)(p)
                            : u.createElement(
                                D.e,
                                (0, o.Z)(
                                  {
                                    isRemovable: k,
                                    iconCategory: 'modern',
                                    iconName: 'filter',
                                    count:
                                      ((null == l ? void 0 : l.length) || 0) > 1
                                        ? null == l
                                          ? void 0
                                          : l.length
                                        : void 0,
                                  },
                                  p
                                )
                              ),
                        v = Y.filter(function (e) {
                          return e.value !== s;
                        }),
                        h =
                          (null === (r = $[s]) || void 0 === r
                            ? void 0
                            : r.values) || [];
                      return (0,
                      i.Z)(f.L, { className: d()(Se.Z.filterDropdown, M), classNameLayout: d()(Se.Z.filterDropdownLayout, N), defaultVisibility: z.current, usePortals: !0, hideOnClick: !1, width: '31.25rem', onToggle: ae, Trigger: g }, n, (0, i.Z)('div', { className: Se.Z.filterDropdownColumn, 'data-testid': 'id-filter-dropdown-content' }, void 0, (0, i.Z)(Z, { list: X, height: '15.625rem', activeValue: e, disabledList: v, onChange: te(n), categories: c })), (0, i.Z)('div', { className: Se.Z.filterDropdownColumn }, void 0, x ? (0, i.Z)(E.Z, { className: Se.Z.filterSpinnerWrapper }, void 0, _e || (_e = (0, i.Z)(E.$, {}))) : e.value === m.Db.DAYPART ? (0, i.Z)(Le, { list: h, values: l, onChange: ne(n) }) : 'action.duration' === e.value ? (0, i.Z)(Ze.F, { from: F, to: Pe, values: ie(l), validate: Q, onChange: re(n) }) : (0, i.Z)(we, { label: a, itemsPerPage: b, height: h.length > b ? '12.125rem' : '14.0625rem', list: h, activeValues: l, onChange: ne(n), groups: J, dimension: s, updateGroups: C, setActiveFilters: V, searchContentNode: j, isExcludeSelected: B, setIsExcludeSelected: q })));
                    }),
                (null == X ? void 0 : X.length) !==
                  (null == Y ? void 0 : Y.length) && A
                  ? (0, i.Z)(
                      v.z,
                      {
                        size: 'auto',
                        'data-testid': 'id-filter-add-button',
                        className: Se.Z.filterAddFilterButton,
                        onClick: ee,
                      },
                      void 0,
                      R('general.addFilter')
                    )
                  : null
              ),
              T
            )
          );
        };
    },
    77402: function (e, t, n) {
      'use strict';
      n.d(t, {
        Y: function () {
          return f;
        },
      });
      var r,
        i = n(87462),
        o = n(22928),
        a = n(4942),
        s = n(67294),
        l = n(94184),
        u = n.n(l),
        c = n(86485),
        d = n(74416),
        m = n(69088),
        p = n(14162),
        g = function (e) {
          var t,
            n = e.title,
            i = e.content,
            l = e.isVisible,
            g = e.onRemove,
            f = e.isRemovable,
            v = void 0 === f || f,
            h = e.toggle,
            b = e.className,
            y = e.isDisabled,
            T = void 0 !== y && y,
            _ = e.isExcludeSelected,
            M = void 0 !== _ && _,
            N = (0, c.$G)().t,
            w = (0, s.useCallback)(
              function (e) {
                e.stopPropagation(), null == g || g(e);
              },
              [g]
            );
          return (0, o.Z)(
            d.W,
            {
              isVisible: l,
              toggle: h,
              className: u()(
                p.Z.filterTrigger,
                b,
                ((t = {}),
                (0, a.Z)(t, p.Z.isActive, l),
                (0, a.Z)(t, p.Z.isDisabled, T),
                t)
              ),
              isDisabled: T,
            },
            void 0,
            (0, o.Z)(
              'div',
              { className: p.Z.filterTriggerContent },
              void 0,
              v
                ? (0, o.Z)(
                    'span',
                    {
                      role: 'button',
                      className: p.Z.filterTriggerCloseButton,
                      onClick: w,
                    },
                    void 0,
                    r ||
                      (r = (0, o.Z)(m.J, {
                        name: 'icon-close',
                        size: '0.75rem',
                        color: '#fff',
                      }))
                  )
                : null,
              n &&
                (0, o.Z)(
                  'h4',
                  { className: p.Z.filterTriggerTitle },
                  void 0,
                  n,
                  ':'
                ),
              M &&
                (0, o.Z)(
                  'span',
                  { className: p.Z.filterFrequencyFilterAllExcept },
                  void 0,
                  N('general.allExcept'),
                  ' '
                ),
              i || N('general.chooseValues')
            )
          );
        },
        f = function (e) {
          return function (t) {
            return s.createElement(g, (0, i.Z)({}, t, e));
          };
        };
    },
    56890: function (e, t, n) {
      'use strict';
      n(67294);
      var r = n(13842);
      t.Z = { title: 'FilterDuration', component: r.F };
      !(function () {
        for (var e = [], t = 1; t < 11; t += 1)
          e.push({ value: ''.concat(t, ' min'), label: ''.concat(t, ' min') });
        for (var n = 1; n < 13; n += 1)
          e.push({ value: ''.concat(n, ' h'), label: ''.concat(n, ' h') });
      })();
    },
    13842: function (e, t, n) {
      'use strict';
      n.d(t, {
        F: function () {
          return M;
        },
      });
      var r = n(22928),
        i = n(4942),
        o = n(70885),
        a = n(67294),
        s = n(86485),
        l = n(74416),
        u = n(53181),
        c = n(69088),
        d = n(61719),
        m = 'FilterDuration_filterDuration__3qpBb',
        p = 'FilterDuration_filterDurationDropdown__K4b9N',
        g = 'FilterDuration_filterDurationDropdownLayout__3PTzb',
        f = 'FilterDuration_filterDurationTrigger__2-RCF',
        v = 'FilterDuration_filterDurationTriggerInput__1zJ1s',
        h = 'FilterDuration_filterDurationTriggerIcon__XEFxk',
        b = function (e) {
          var t = e.label,
            n = e.value,
            i = void 0 === n ? '' : n,
            o = e.name,
            s = e.onChange,
            l = e.onFocus,
            u = e.onBlur,
            m = e.onClick,
            p = e.testId;
          return (0, r.Z)(
            a.Fragment,
            {},
            void 0,
            (0, r.Z)(
              'div',
              { className: f, onClick: m, 'data-testid': p },
              void 0,
              t,
              (0, r.Z)(d.I, {
                id: 'id-'.concat(o),
                name: o,
                className: v,
                value: i,
                onChange: s,
                onFocus: l,
                onBlur: u,
                'data-testid': ''.concat(p, '-input'),
              })
            ),
            (0, r.Z)(c.J, {
              name: 'icon-down-open-mini',
              size: '1.3rem',
              color: 'rgba(0, 0, 0, 0.3)',
              className: h,
              onClick: m,
              'data-testid': p,
            })
          );
        };
      function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var _ = function (e, t) {
          return e.map(function (e) {
            return { id: e.value, children: e.label, active: t === e.value };
          });
        },
        M = function (e) {
          var t = e.from,
            n = void 0 === t ? [] : t,
            c = e.to,
            d = void 0 === c ? [] : c,
            f = e.values,
            v = void 0 === f ? [] : f,
            h = e.validate,
            y =
              void 0 === h
                ? function () {
                    return !0;
                  }
                : h,
            M = e.onChange,
            N = (0, s.$G)().t,
            w = (0, a.useRef)(!1),
            C = (0, a.useRef)(),
            Z = (0, a.useRef)(),
            D = (0, a.useMemo)(
              function () {
                var e,
                  t =
                    null == v || null === (e = v[0]) || void 0 === e
                      ? void 0
                      : e.value;
                return t && 'string' == typeof t ? t.split('-') : [];
              },
              [v]
            ),
            E = (0, o.Z)(D, 2),
            I = E[0],
            O = E[1],
            L = (0, a.useState)({ from: I, to: O }),
            A = (0, o.Z)(L, 2),
            S = A[0],
            k = A[1],
            j = (0, a.useMemo)(
              function () {
                return _(n, I);
              },
              [n, I]
            ),
            P = (0, a.useMemo)(
              function () {
                return _(d, O);
              },
              [d, O]
            ),
            x = (0, a.useCallback)(
              function (e, t) {
                var n = ('from' === e ? [t, O] : [I, t])
                  .filter(Boolean)
                  .join('-');
                return { label: n.split('-').join(' - '), value: n };
              },
              [I, O]
            ),
            R = (0, a.useCallback)(function (e) {
              k(function (t) {
                return T(
                  T({}, t),
                  {},
                  (0, i.Z)({}, e.target.name, e.target.value)
                );
              });
            }, []),
            z = (0, a.useCallback)(
              function () {
                Z.current = S;
              },
              [S]
            ),
            F = (0, a.useCallback)(
              function (e) {
                return function (t) {
                  var n = x(e, t.id);
                  y(n, e) && ((C.current = e), M([n], e));
                };
              },
              [x, M, y]
            ),
            U = (0, a.useCallback)(
              function (e) {
                return function (t) {
                  if (!t.isVisible && !C.current) {
                    var n = x(e, S[e]);
                    if (!y(n, e)) return void (Z.current && k(Z.current));
                    M([n], e);
                  }
                  C.current = void 0;
                };
              },
              [x, S, M, y]
            );
          (0, a.useEffect)(
            function () {
              w.current &&
                k(function (e) {
                  return T(T({}, e), {}, { from: I });
                });
            },
            [I]
          ),
            (0, a.useEffect)(
              function () {
                w.current &&
                  k(function (e) {
                    return T(T({}, e), {}, { to: O });
                  });
              },
              [O]
            ),
            (0, a.useEffect)(function () {
              return (
                (w.current = !0),
                function () {
                  w.current = !1;
                }
              );
            }, []);
          var G = (0, a.useCallback)(
              function (e) {
                var t = e.toggle;
                return (0, r.Z)(b, {
                  label: N('general.from'),
                  name: 'from',
                  value: S.from,
                  onChange: R,
                  onFocus: z,
                  onClick: t,
                  testId: 'id-filter-duration-trigger-from',
                });
              },
              [N, S.from, R, z]
            ),
            Y = (0, a.useCallback)(
              function (e) {
                var t = e.toggle;
                return (0, r.Z)(b, {
                  label: N('general.to'),
                  name: 'to',
                  value: S.to,
                  onFocus: z,
                  onChange: R,
                  onClick: t,
                  testId: 'id-filter-duration-trigger-to',
                });
              },
              [R, z, S.to, N]
            );
          return (0, r.Z)(
            'div',
            { className: m, 'data-testid': 'id-filter-duration' },
            void 0,
            (0, r.Z)(
              l.L,
              {
                testId: 'id-filter-duration-dropdown-from',
                Trigger: G,
                className: p,
                classNameLayout: g,
                width: '100%',
                onToggle: U('from'),
              },
              void 0,
              (0, r.Z)(u.s, { list: j, onChange: F('from') })
            ),
            (0, r.Z)(
              l.L,
              {
                testId: 'id-filter-duration-dropdown-to',
                Trigger: Y,
                className: p,
                classNameLayout: g,
                width: '100%',
                onToggle: U('to'),
              },
              void 0,
              (0, r.Z)(u.s, { list: P, onChange: F('to') })
            )
          );
        };
    },
    12051: function (e, t, n) {
      'use strict';
      n.d(t, {
        e: function () {
          return T;
        },
      });
      var r = n(22928),
        i = n(45987),
        o = n(67294),
        a = n(94184),
        s = n.n(a),
        l = n(92667),
        u = n(86485),
        c = n(61873),
        d = 'FilterTrigger_filterTrigger__htca_',
        m = 'FilterTrigger_filterTriggerIcon__2Agtn',
        p = 'FilterTrigger_filterTriggerTitle__3rZqt',
        g = 'FilterTrigger_filterTriggerContent__GcHjT',
        f = 'FilterTrigger_filterTriggerCounter__22OwZ',
        v = 'FilterTrigger_filterTriggerClose__h0Lll',
        h = 'FilterTrigger_filterTriggerDropIcon__1DBfM',
        b = [
          'title',
          'iconName',
          'content',
          'iconCategory',
          'onClick',
          'className',
          'classNameContent',
          'count',
          'isRemovable',
          'onRemove',
        ],
        y = function () {},
        T = (0, o.forwardRef)(function (e, t) {
          var n = e.title,
            a = e.iconName,
            T = e.content,
            _ = e.iconCategory,
            M = e.onClick,
            N = e.className,
            w = e.classNameContent,
            C = e.count,
            Z = e.isRemovable,
            D = void 0 !== Z && Z,
            E = e.onRemove,
            I = (0, i.Z)(e, b),
            O = (0, u.$G)().t,
            L = null == I ? void 0 : I['aria-hidden'],
            A = void 0 !== L && !L,
            S = (0, o.useMemo)(function () {
              return (0, c.MX)('--color-neutral-800');
            }, []),
            k = (0, o.useCallback)(
              function (e) {
                e.stopPropagation(), null == E || E(e);
              },
              [E]
            );
          return o.createElement(
            l.WA,
            {
              ref: t,
              className: s()(d, N),
              iconClassName: h,
              isVisible: A,
              toggle: M || y,
              isOpenable: !!M,
            },
            a
              ? (0, r.Z)(l.JO, { name: a, category: _, color: S, className: m })
              : null,
            n ? (0, r.Z)('strong', { className: p }, void 0, n, ':') : null,
            (0, r.Z)(
              'span',
              { className: s()(g, w) },
              void 0,
              void 0 !== T ? T : O('general.chooseValues')
            ),
            'number' == typeof C
              ? (0, r.Z)(l.AT, { className: f, size: 'small', count: C })
              : null,
            D
              ? (0, r.Z)(l.JO, {
                  category: 'navigation',
                  name: 'cancel',
                  className: v,
                  onClick: k,
                })
              : null
          );
        });
      T.displayName = 'FilterTrigger';
    },
    58920: function (e, t, n) {
      'use strict';
      var r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        d = n(87462),
        m = n(22928),
        p = n(70885),
        g = n(67294),
        f = n(81683),
        v = n(61719),
        h = n(64517),
        b = n(20395),
        y = n(78468);
      t.Z = {
        Default: function () {
          var e = (0, g.useState)(),
            t = (0, p.Z)(e, 2),
            n = t[0],
            l = t[1],
            u = (0, b.c)(),
            c = u.register,
            d = u.handleSubmit,
            f = u.formState.errors,
            T = (0, g.useCallback)(function (e) {
              l(e);
            }, []);
          return (0, m.Z)(
            g.Fragment,
            {},
            void 0,
            (0, m.Z)(
              y.l,
              { onSubmit: d(T) },
              void 0,
              g.createElement(v.I, c('label', { required: !0 })),
              r || (r = (0, m.Z)('br', {})),
              null != f && f.label
                ? i || (i = (0, m.Z)('p', {}, void 0, 'Field required'))
                : null,
              o || (o = (0, m.Z)('br', {})),
              a ||
                (a = (0, m.Z)(
                  h.z,
                  { type: 'submit', color: 'primary' },
                  void 0,
                  'Submit form'
                ))
            ),
            s || (s = (0, m.Z)('br', {})),
            n ? JSON.stringify(n) : null
          );
        },
        WithInputBox: function () {
          var e,
            t = (0, b.c)({ mode: 'onChange' }),
            n = t.register,
            r = t.handleSubmit,
            i = t.formState.errors,
            o = t.getValues,
            a = t.formState.isValid,
            s = (0, g.useCallback)(function (e) {
              console.log(e);
            }, []);
          return (0, m.Z)(
            g.Fragment,
            {},
            void 0,
            (0, m.Z)(
              y.l,
              { onSubmit: r(s) },
              void 0,
              (0, m.Z)(
                f.W,
                {
                  htmlFor: 'id-label',
                  label: 'Label',
                  error:
                    null == i || null === (e = i.label) || void 0 === e
                      ? void 0
                      : e.message,
                },
                void 0,
                g.createElement(
                  v.I,
                  (0, d.Z)(
                    { id: 'id-label' },
                    n('label', { required: 'Field required' })
                  )
                )
              ),
              l || (l = (0, m.Z)('br', {})),
              u ||
                (u = (0, m.Z)(
                  h.z,
                  { type: 'submit', color: 'primary' },
                  void 0,
                  'Submit form'
                ))
            ),
            c || (c = (0, m.Z)('br', {})),
            a ? JSON.stringify(o() || {}) : null
          );
        },
      };
    },
    78468: function (e, t, n) {
      'use strict';
      n.d(t, {
        l: function () {
          return c;
        },
      });
      var r = n(87462),
        i = n(45987),
        o = n(67294),
        a = n(94184),
        s = n.n(a),
        l = 'Form_form__2TM1N',
        u = ['children', 'onSubmit', 'className'],
        c = (0, o.forwardRef)(function (e, t) {
          var n = e.children,
            a = e.onSubmit,
            c =
              void 0 === a
                ? function (e) {
                    return e.preventDefault();
                  }
                : a,
            d = e.className,
            m = (0, i.Z)(e, u);
          return o.createElement(
            'form',
            (0, r.Z)(
              {
                'data-testid': 'id-form',
                noValidate: !0,
                action: '#',
                className: s()(l, d),
                onSubmit: c,
              },
              m,
              { ref: t }
            ),
            n
          );
        });
      c.displayName = 'Form';
    },
    71669: function (e, t, n) {
      'use strict';
      n.d(t, {
        l: function () {
          return r.l;
        },
        c: function () {
          return i.c;
        },
      });
      var r = n(78468),
        i = n(20395);
    },
    20395: function (e, t, n) {
      'use strict';
      n.d(t, {
        c: function () {
          return c;
        },
      });
      var r = n(4942),
        i = n(45987),
        o = n(42283),
        a = n(28834),
        s = ['schema'];
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c = function (e) {
        var t = e || {},
          n = t.schema,
          r = (0, i.Z)(t, s);
        return (0, o.cI)(
          u(u({}, r), {}, { resolver: n ? (0, a.X)(n) : void 0 })
        );
      };
    },
    17370: function (e, t, n) {
      'use strict';
      var r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        d = n(22928),
        m = n(67294),
        p = n(93758),
        g = [
          'icon-bar-chart',
          'icon-calendar',
          'icon-check-mark',
          'icon-check-mark-2',
          'icon-clipboard',
          'icon-comparison',
          'icon-crosshair',
          'icon-dashboard',
          'icon-platform',
          'icon-clear',
          'icon-settings',
          'icon-home',
          'icon-profile',
          'icon-laptop',
          'icon-line-chart',
          'icon-line-chart-2',
          'icon-search',
          'icon-menu-1',
          'icon-monitoring',
          'icon-screen',
          'icon-segmentation',
          'icon-plus',
          'icon-sort-descending',
          'icon-sort-ascending',
          'icon-audience',
          'icon-tablet',
          'icon-time-2',
          'icon-live',
          'icon-tv',
          'icon-tv-play',
          'icon-users',
          'icon-vod',
          'icon-remove',
          'icon-down-open-mini',
          'icon-download',
          'icon-left-open-mini',
          'icon-back',
          'icon-list',
          'icon-menu2',
          'icon-mobile',
          'icon-right-open-mini',
          'icon-up-open-mini',
          'icon-trash',
          'icon-logout',
          'icon-user',
          'icon-align',
          'icon-clock',
          'icon-time-6-icon',
          'icon-user-add',
          'icon-audience-builder',
          'icon-ta-remove',
          'icon-edit-2-icon',
          'icon-overview',
          'icon-help-circled',
          'icon-bell',
          'icon-attention',
          'icon-copy',
          'icon-bookmark',
          'icon-video',
          'icon-youtube',
          'icon-more-closed',
          'icon-more-open',
          'icon-waterfall',
          'icon-list-add',
          'icon-select-all',
          'icon-clear-all',
          'icon-frowny-face',
          'icon-calc-3',
          'icon-research',
          'icon-proposals',
          'icon-upload',
          'icon-campaigns',
          'icon-lock',
          'icon-unlock',
          'icon-history',
          'icon-info-circled',
          'icon-login',
          'icon-indexing',
          'icon-budget',
          'icon-unlock2',
          'icon-doc-text',
          'icon-arrow',
          'icon-chat',
          'icon-book',
          'icon-code',
          'icon-lifebuoy',
          'icon-close',
          'icon-drag',
          'icon-merge',
          'icon-sync',
          'icon-warning',
        ],
        f = [
          'apps',
          'area-chart',
          'arrow_back',
          'arrow_downward',
          'arrow_forward',
          'arrow_upward',
          'bar-chart',
          'book',
          'bookmark',
          'breakdown',
          'cached',
          'cancel',
          'chat',
          'checkmark',
          'chevron_left',
          'chevron_right',
          'close',
          'code',
          'column-chart',
          'columns',
          'copy',
          'dashboard',
          'datasource',
          'date_range',
          'download',
          'drag_handle',
          'edit',
          'error',
          'expand_less',
          'expand_more',
          'filter',
          'help',
          'help_outline',
          'history',
          'info',
          'info2',
          'line-chart',
          'lock',
          'logout',
          'map',
          'more_horiz',
          'more_vert',
          'notifications',
          'open',
          'pie-chart',
          'query_builder',
          'report_problem',
          'schedule',
          'search',
          'settings',
          'star',
          'success',
          'sync',
          'table-chart',
          'trash',
          'user',
          'users',
        ];
      t.Z = {
        Default: function () {
          return (0, d.Z)(
            'div',
            {
              style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(10, 1fr)',
                gridColumnGap: '0.625rem',
                gridRowGap: '1.25rem',
              },
            },
            void 0,
            g.map(function (e) {
              return (0,
              d.Z)('div', { style: { textAlign: 'center' } }, e, (0, d.Z)('div', { style: { color: 'brown' } }, void 0, (0, d.Z)(p.J, { name: e, size: '2rem' })), r || (r = (0, d.Z)('br', {})), e);
            })
          );
        },
        Modern: function () {
          return (0, d.Z)(
            'div',
            {
              style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(10, 1fr)',
                gridColumnGap: '0.625rem',
                gridRowGap: '1.25rem',
              },
            },
            void 0,
            f.map(function (e) {
              return (0,
              d.Z)('div', { style: { textAlign: 'center' } }, e, (0, d.Z)('div', { style: { color: 'brown' } }, void 0, (0, d.Z)(p.J, { category: 'modern', name: e, size: '2rem' })), i || (i = (0, d.Z)('br', {})), e);
            })
          );
        },
        PolymorphicIcon: function () {
          return (
            o ||
            (o = (0, d.Z)(
              m.Fragment,
              {},
              void 0,
              (0, d.Z)(p.J, { as: 'button', name: 'icon-close', size: '2rem' }),
              (0, d.Z)('br', {}),
              (0, d.Z)(p.J, {
                as: 'button',
                name: 'icon-close',
                size: '2rem',
                disabled: !0,
              }),
              (0, d.Z)('br', {}),
              (0, d.Z)(p.J, {
                as: 'a',
                href: 'https://www.google.com',
                name: 'icon-close',
                size: '2rem',
              })
            ))
          );
        },
        IconWithRef: function () {
          var e = (0, m.useRef)(null);
          return (
            (0, m.useEffect)(function () {
              console.log(null == e ? void 0 : e.current);
            }, []),
            (0, d.Z)(
              m.Fragment,
              {},
              void 0,
              a ||
                (a = (0, d.Z)(p.J, {
                  as: 'button',
                  name: 'icon-close',
                  size: '2rem',
                })),
              s || (s = (0, d.Z)('br', {})),
              l ||
                (l = (0, d.Z)(p.J, {
                  as: 'button',
                  name: 'icon-close',
                  size: '2rem',
                  disabled: !0,
                })),
              u || (u = (0, d.Z)('br', {})),
              m.createElement(p.J, {
                ref: e,
                as: 'a',
                href: 'https://www.google.com',
                name: 'icon-close',
                size: '2rem',
              })
            )
          );
        },
        FromMaterialDesign: function () {
          return (
            c ||
            (c = (0, d.Z)(
              m.Fragment,
              {},
              void 0,
              (0, d.Z)(p.J, {
                category: 'action',
                name: 'get_app',
                size: '2rem',
              }),
              (0, d.Z)('br', {}),
              (0, d.Z)(
                'a',
                { href: 'https://material.io/resources/icons/?style=baseline' },
                void 0,
                'Icons names list'
              )
            ))
          );
        },
      };
    },
    93758: function (e, t, n) {
      'use strict';
      n.d(t, {
        J: function () {
          return T;
        },
      });
      var r = n(15861),
        i = n(22928),
        o = n(4942),
        a = n(70885),
        s = n(45987),
        l = n(87757),
        u = n.n(l),
        c = n(67294),
        d = n(94184),
        m = n.n(d),
        p = 'Icon_icon__7KZWD',
        g = 'Icon_iconSpacing__KsjP5',
        f = n.p + 'static/media/sprite.a38a5769.svg',
        v = n.p + 'static/media/sprite-modern.efc54bcb.svg',
        h = [
          'as',
          'name',
          'size',
          'color',
          'className',
          'category',
          'testId',
          'isSpacing',
        ];
      function b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var T = (0, c.forwardRef)(function (e, t) {
        var l,
          d = e.as,
          b = e.name,
          T = e.size,
          _ = void 0 === T ? '1.25rem' : T,
          M = e.color,
          N = void 0 === M ? 'currentColor' : M,
          w = e.className,
          C = e.category,
          Z = e.testId,
          D = void 0 === Z ? 'id-icon' : Z,
          E = e.isSpacing,
          I = void 0 !== E && E,
          O = (0, s.Z)(e, h),
          L = (0, c.useRef)(!1),
          A = (0, c.useState)('modern' !== C ? f : v),
          S = (0, a.Z)(A, 2),
          k = S[0],
          j = S[1],
          P = m()(p, w, (0, o.Z)({}, g, I)),
          x = (0, c.useMemo)(
            function () {
              return C && 'modern' !== C
                ? ''.concat(k, '#ic_').concat(b, '_24px')
                : ''.concat(k, '#').concat(b);
            },
            [C, b, k]
          ),
          R = (0, c.useMemo)(
            function () {
              return b
                ? (0, c.createElement)(
                    d || 'span',
                    y(
                      y({}, O),
                      {},
                      { ref: t, className: P, 'data-name': b, 'data-testid': D }
                    ),
                    l ||
                      (l = (0, i.Z)(
                        'svg',
                        { width: _, height: _, 'data-testid': 'id-icon-svg' },
                        void 0,
                        (0, i.Z)('use', { href: x, fill: N })
                      ))
                  )
                : null;
            },
            [d, P, N, x, b, t, O, _, D]
          );
        return (
          (0, c.useEffect)(
            function () {
              (0, r.Z)(
                u().mark(function e() {
                  var t;
                  return u().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), !C || 'modern' === C)) {
                              e.next = 6;
                              break;
                            }
                            return (
                              (e.next = 4),
                              n(21259)('./svg-sprite-'.concat(C, '-symbol.svg'))
                            );
                          case 4:
                            (t = e.sent), L.current && j(t.default);
                          case 6:
                            e.next = 11;
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0);
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              )();
            },
            [b]
          ),
          (0, c.useEffect)(function () {
            return (
              (L.current = !0),
              function () {
                L.current = !1;
              }
            );
          }, []),
          R
        );
      });
      T.displayName = 'Icon';
    },
    69088: function (e, t, n) {
      'use strict';
      n.d(t, {
        J: function () {
          return r.J;
        },
      });
      var r = n(93758);
    },
    3350: function (e, t, n) {
      'use strict';
      var r,
        i = n(70885),
        o = n(22928),
        a = n(67294),
        s = n(91774);
      t.Z = {
        Default: function () {
          return (
            r ||
            (r = (0, o.Z)(
              'form',
              { action: '#' },
              void 0,
              (0, o.Z)(s.I, { name: 'test' })
            ))
          );
        },
        Controlled: function () {
          var e = (0, a.useState)(''),
            t = (0, i.Z)(e, 2),
            n = t[0],
            r = t[1],
            l = (0, a.useCallback)(function (e) {
              r(e.target.value);
            }, []);
          return (0, o.Z)(
            'form',
            { action: '#' },
            void 0,
            (0, o.Z)(s.I, { name: 'test', value: n, onChange: l }),
            n
          );
        },
      };
    },
    91774: function (e, t, n) {
      'use strict';
      n.d(t, {
        I: function () {
          return c;
        },
      });
      var r = n(87462),
        i = n(45987),
        o = n(67294),
        a = n(94184),
        s = n.n(a),
        l = { input: 'Input_input__3PNbO', search: 'Input_search__1ZUHP' },
        u = ['type', 'id', 'autoComplete', 'className'],
        c = (0, o.forwardRef)(function (e, t) {
          var n,
            a,
            c,
            d = e.type,
            m = void 0 === d ? 'text' : d,
            p = e.id,
            g =
              void 0 === p
                ? 'f'.concat(
                    (null !==
                      (n =
                        null === (a = window) ||
                        void 0 === a ||
                        null === (c = a.performance) ||
                        void 0 === c
                          ? void 0
                          : c.now()) && void 0 !== n
                      ? n
                      : Date.now()
                    ).toString(16)
                  )
                : p,
            f = e.autoComplete,
            v = void 0 === f ? 'off' : f,
            h = e.className,
            b = (0, i.Z)(e, u);
          return o.createElement(
            'input',
            (0, r.Z)({ 'data-testid': 'id-input' }, b, {
              id: g,
              autoComplete: v,
              ref: t,
              type: m,
              className: s()(l.input, h, l[m]),
            })
          );
        });
      c.displayName = 'Input';
    },
    61719: function (e, t, n) {
      'use strict';
      n.d(t, {
        I: function () {
          return r.I;
        },
      });
      var r = n(91774);
    },
    17644: function (e, t, n) {
      'use strict';
      var r,
        i = n(22928),
        o = n(67294),
        a = n(34395);
      t.Z = {
        Default: function () {
          return (
            r ||
            (r = (0, i.Z)(
              o.Fragment,
              {},
              void 0,
              (0, i.Z)(
                a.W,
                { label: 'Label' },
                void 0,
                (0, i.Z)('input', { type: 'text', name: 'text' })
              ),
              (0, i.Z)('br', {}),
              (0, i.Z)('br', {}),
              (0, i.Z)(
                a.W,
                { label: 'Label', error: 'Error text' },
                void 0,
                (0, i.Z)('input', { type: 'text', name: 'text' })
              )
            ))
          );
        },
      };
    },
    34395: function (e, t, n) {
      'use strict';
      n.d(t, {
        W: function () {
          return u;
        },
      });
      var r = n(22928),
        i = (n(67294), n(94184)),
        o = n.n(i),
        a = 'InputBox_inputBox__371Qg',
        s = 'InputBox_inputLabel__Ia8tz',
        l = 'InputBox_inputError__3Y-u1',
        u = function (e) {
          var t = e.error,
            n = e.htmlFor,
            i = e.label,
            u = e.className,
            c = e.children;
          return i || c
            ? (0, r.Z)(
                'div',
                { 'data-testid': 'id-input-box', className: o()(a, u) },
                void 0,
                (0, r.Z)('label', { htmlFor: n, className: s }, void 0, i),
                c,
                t
                  ? (0, r.Z)(
                      'span',
                      { 'data-testid': 'id-input-box-error', className: l },
                      void 0,
                      t
                    )
                  : null
              )
            : null;
        };
    },
    81683: function (e, t, n) {
      'use strict';
      n.d(t, {
        W: function () {
          return r.W;
        },
      });
      var r = n(34395);
    },
    75684: function (e, t, n) {
      'use strict';
      var r,
        i,
        o = n(22928),
        a = (n(67294), n(97570));
      t.Z = {
        Radio: function () {
          return (
            r ||
            (r = (0, o.Z)(
              'form',
              { action: '#' },
              void 0,
              (0, o.Z)(a.r, {
                id: 'id-1',
                name: 'text',
                value: 1,
                label: 'Text 1',
              }),
              (0, o.Z)('br', {}),
              (0, o.Z)(a.r, {
                id: 'id-2',
                name: 'text',
                value: 2,
                label: 'Text 2',
              }),
              (0, o.Z)('br', {}),
              (0, o.Z)(a.r, {
                id: 'id-3',
                name: 'text',
                value: 3,
                label: 'Text 3',
              })
            ))
          );
        },
        Checkbox: function () {
          return (
            i ||
            (i = (0, o.Z)(
              'form',
              { action: '#' },
              void 0,
              (0, o.Z)(a.o, {
                id: 'id-1',
                name: 'text',
                value: 1,
                label: 'Text 1',
              }),
              (0, o.Z)('br', {}),
              (0, o.Z)(a.o, {
                id: 'id-2',
                name: 'text',
                value: 2,
                label: 'Text 2',
              }),
              (0, o.Z)('br', {}),
              (0, o.Z)(a.o, {
                id: 'id-3',
                name: 'text',
                value: 3,
                label: 'Text 3',
              })
            ))
          );
        },
      };
    },
    97570: function (e, t, n) {
      'use strict';
      n.d(t, {
        o: function () {
          return h;
        },
        r: function () {
          return b;
        },
      });
      var r = n(87462),
        i = n(67294),
        o = n(22928),
        a = n(45987),
        s = n(94184),
        l = n.n(s),
        u = n(69088),
        c = 'InputSelectionControls_inputSelectionControlsWrapper__3Lqnk',
        d = 'InputSelectionControls_inputSelectionControlsIcon__NliHO',
        m = 'InputSelectionControls_inputSelectionControlsIconWrapper__2tQq1',
        p = 'InputSelectionControls_inputSelectionControlsInput__1NwTt',
        g = 'InputSelectionControls_inputSelectionControlsText__2DUd4',
        f = ['type', 'label', 'className', 'classNameLabel', 'style'],
        v = (0, i.forwardRef)(function (e, t) {
          var n = e.type,
            s = void 0 === n ? 'checkbox' : n,
            v = e.label,
            h = e.className,
            b = e.classNameLabel,
            y = e.style,
            T = (0, a.Z)(e, f);
          return (0,
          o.Z)('label', { className: l()(c, h), style: y }, void 0, i.createElement('input', (0, r.Z)({ 'data-testid': 'id-input-selection-controls' }, T, { ref: t, className: p, type: s })), (0, o.Z)('span', { className: m }, void 0, (0, o.Z)(u.J, { className: d, name: 'icon-check-mark-2', size: '0.625rem' })), v ? (0, o.Z)('span', { 'data-testid': 'id-input-selection-controls-label', className: l()(g, b) }, void 0, v) : null);
        });
      v.displayName = 'InputSelectionControls';
      var h = (0, i.forwardRef)(function (e, t) {
        return i.createElement(
          v,
          (0, r.Z)({}, e, { type: 'checkbox', ref: t })
        );
      });
      h.displayName = 'InputCheckbox';
      var b = (0, i.forwardRef)(function (e, t) {
        return i.createElement(v, (0, r.Z)({}, e, { type: 'radio', ref: t }));
      });
      b.displayName = 'InputRadio';
    },
    85589: function (e, t, n) {
      'use strict';
      var r,
        i = n(22928),
        o = (n(67294), n(80562));
      t.Z = {
        Default: function () {
          return (
            r ||
            (r = (0, i.Z)(
              'div',
              {},
              void 0,
              (0, i.Z)(
                'p',
                {},
                void 0,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores odit eveniet delectus obcaecati perferendis. Iste, quo vero nobis dolor id reiciendis tempora odio expedita delectus, eos, eligendi ad. Ratione.'
              ),
              (0, i.Z)(o.a, {})
            ))
          );
        },
      };
    },
    80562: function (e, t, n) {
      'use strict';
      n.d(t, {
        a: function () {
          return v;
        },
      });
      var r = n(22928),
        i = (n(67294), n(94184)),
        o = n.n(i),
        a = n(62596),
        s = 'Loader_loaderOverlay__LGELf',
        l = 'Loader_loaderWrapper__2wuez',
        u = 'Loader_loader__1j2Bs',
        c = 'Loader_loaderText__2-E48',
        d = 'Loader_bar1__1T8rd',
        m = 'Loader_bar2__3bt3r',
        p = 'Loader_bar3__386ht',
        g = 'Loader_bar4__2jQIh',
        f = 'Loader_bar5__2hh6X',
        v = function (e) {
          var t = e.className,
            n = e.classNameOverlay;
          return (0, r.Z)(
            'div',
            { 'data-testid': 'id-loader', className: o()(s, n) },
            void 0,
            (0, r.Z)(
              'div',
              { className: l },
              void 0,
              (0, r.Z)(
                'div',
                { className: o()(u, t) },
                void 0,
                (0, r.Z)('div', { className: d }),
                (0, r.Z)('div', { className: m }),
                (0, r.Z)('div', { className: p }),
                (0, r.Z)('div', { className: g }),
                (0, r.Z)('div', { className: f })
              ),
              (0, r.Z)(
                'div',
                { className: c },
                void 0,
                a.Z.t('general.loading')
              )
            )
          );
        };
    },
    99753: function (e, t, n) {
      'use strict';
      n.d(t, {
        u: function () {
          return h;
        },
        d: function () {
          return y;
        },
      });
      var r = n(4942),
        i = n(22928),
        o = n(67294),
        a = n(94184),
        s = n.n(a),
        l = n(86485),
        u = n(20404),
        c = n(41198),
        d = 'Modal_modal__P3_V5',
        m = 'Modal_isHidden__3utxB',
        p = 'Modal_modalHeader__2ik2T',
        g = 'Modal_modalContent__1rYYD',
        f = 'Modal_modalOverlay__1obW4',
        v = 'Modal_modalScrollOff__G9n9p',
        h = function (e) {
          var t = e.width,
            n = e.children,
            a = e.title,
            h = e.isOpen,
            b = void 0 !== h && h,
            y = e.isHidden,
            T = e.onClose,
            _ = e.className,
            M = e.classNameHeader,
            N = e.classNameContent,
            w = e.closeOnOverlayClick,
            C = void 0 === w || w,
            Z = e.usePortals,
            D = void 0 === Z || Z,
            E = e.closeOnEscape,
            I = void 0 === E || E,
            O = (0, o.useMemo)(
              function () {
                return { width: t };
              },
              [t]
            );
          (0, l.Zu)(I ? T : void 0),
            (0, o.useEffect)(
              function () {
                window.document.documentElement.classList.toggle(v, b);
              },
              [b]
            );
          var L =
              'string' == typeof a
                ? (0, i.Z)(
                    c.D,
                    { 'data-testid': 'modalComponentTitle', type: 'h2' },
                    void 0,
                    a
                  )
                : a,
            A = b
              ? (0, i.Z)(
                  o.Fragment,
                  {},
                  void 0,
                  (0, i.Z)(
                    'div',
                    {
                      'data-testid': 'modalComponent',
                      className: s()(d, _, (0, r.Z)({}, m, y)),
                      style: O,
                    },
                    void 0,
                    L
                      ? (0, i.Z)('header', { className: s()(p, M) }, void 0, L)
                      : null,
                    (0, i.Z)('div', { className: s()(g, N) }, void 0, n)
                  ),
                  (0, i.Z)('div', {
                    'data-testid': 'modalComponentOverlay',
                    onClick: C ? T : void 0,
                    className: s()('js-overlay', f, (0, r.Z)({}, m, y)),
                  })
                )
              : null;
          return D ? (0, i.Z)(u.h, { id: 'id-modals' }, void 0, A) : A;
        },
        b = n(70885),
        y = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.isOpen,
            n = void 0 !== t && t,
            r = (0, o.useState)(n),
            i = (0, b.Z)(r, 2),
            a = i[0],
            s = i[1],
            l = (0, o.useState)(),
            u = (0, b.Z)(l, 2),
            c = u[0],
            d = u[1],
            m = (0, o.useCallback)(function () {
              return s(function (e) {
                return !e;
              });
            }, []),
            p = (0, o.useCallback)(function () {
              return s(!0);
            }, []),
            g = (0, o.useCallback)(function () {
              s(!1), d(void 0);
            }, []),
            f = (0, o.useCallback)(function () {
              return d(!0);
            }, []),
            v = (0, o.useCallback)(function () {
              return d(!1);
            }, []);
          return {
            isOpen: a,
            isHidden: c,
            showModal: v,
            hideModal: f,
            toggleModal: m,
            openModal: p,
            closeModal: g,
            onClose: g,
          };
        };
    },
    4490: function (e, t, n) {
      'use strict';
      n.d(t, {
        WB: function () {
          return v;
        },
        WZ: function () {
          return p;
        },
      });
      var r = n(87462),
        i = n(22928),
        o = n(45987),
        a = n(67294),
        s = n(86485),
        l = n(92667),
        u = 'ModalConfirm_modalConfirmFooter__1lYwd',
        c = 'ModalConfirm_modalConfirmButton__q7-pz',
        d = 'ModalConfirm_modalCancelButton__3_d7U',
        m = [
          'children',
          'confirmButtonText',
          'confirmButtonColor',
          'onConfirm',
        ],
        p = function (e) {
          var t = e.children,
            n = e.confirmButtonText,
            p = e.confirmButtonColor,
            g = void 0 === p ? 'primary' : p,
            f = e.onConfirm,
            v = (0, o.Z)(e, m),
            h = (0, s.$G)().t,
            b = (0, a.useCallback)(
              function () {
                v.onClose(), f();
              },
              [f, v]
            );
          return v.isOpen
            ? a.createElement(
                l.u_,
                (0, r.Z)({ title: h('general.confirm') }, v),
                t,
                (0, i.Z)(
                  'footer',
                  { className: u },
                  void 0,
                  (0, i.Z)(
                    l.zx,
                    { variant: 'outlined', onClick: v.onClose, className: d },
                    void 0,
                    h('general.cancel')
                  ),
                  (0, i.Z)(
                    l.zx,
                    { color: g, onClick: b, className: c },
                    void 0,
                    n || h('general.ok')
                  )
                )
              )
            : null;
        },
        g = {
          modalAlertHeader: 'ModalAlert_modalAlertHeader__Zh_OD',
          modalAlertContent: 'ModalAlert_modalAlertContent__38k7B',
          modalAlertFooter: 'ModalAlert_modalAlertFooter__1AiQ2',
        },
        f = ['children'],
        v = function (e) {
          var t = e.children,
            n = (0, o.Z)(e, f),
            u = (0, s.$G)().t;
          return a.createElement(
            l.u_,
            (0, r.Z)({}, n, {
              classNameHeader: g.modalAlertHeader,
              classNameContent: g.modalAlertContent,
            }),
            t,
            (0, i.Z)(
              'footer',
              { className: g.modalAlertFooter },
              void 0,
              (0, i.Z)(
                l.zx,
                {
                  color: 'primary',
                  onClick: n.onClose,
                  className: g.modalAlertButton,
                },
                void 0,
                u('general.ok')
              )
            )
          );
        };
    },
    98391: function (e, t, n) {
      'use strict';
      n.d(t, {
        t: function () {
          return f;
        },
      });
      var r,
        i = n(22928),
        o = n(67294),
        a = n(94184),
        s = n.n(a),
        l = n(92667),
        u = n(69088),
        c = 'Pagination_pagination__2plzt',
        d = 'Pagination_paginationControlsPrev__2aYbJ',
        m = 'Pagination_paginationControlsNext__1oTyK',
        p = 'Pagination_paginationContent__1FKtv',
        g = 'Pagination_paginationControls__3rJnZ',
        f = function (e) {
          var t = e.total,
            n = e.itemsPerPage,
            a = void 0 === n ? 5 : n,
            f = e.currentPage,
            v = e.onChange,
            h = e.className,
            b = e.contentClassName,
            y = e.controlsClassName,
            T = e.children,
            _ = (0, o.useMemo)(
              function () {
                return t ? Math.ceil(t / a) : void 0;
              },
              [a, t]
            ),
            M = (0, o.useMemo)(
              function () {
                if (f) {
                  var e = 1 === f ? 0 : a * (f - 1);
                  return (
                    f === _ && (e = (f - 1) * a),
                    { start: (e += 1), end: f !== _ ? a * f : t, total: t }
                  );
                }
              },
              [f, a, t, _]
            ),
            N = (0, o.useCallback)(
              function (e) {
                return function () {
                  null == v || v(f + e);
                };
              },
              [f, v]
            );
          return !t || !f || t < a
            ? null
            : (0, i.Z)(
                'div',
                { className: s()(c, h) },
                void 0,
                T,
                (0, i.Z)(
                  'div',
                  { className: s()(g, y) },
                  void 0,
                  (0, i.Z)(u.J, {
                    as: 'button',
                    type: 'button',
                    size: '1.375rem',
                    disabled: 1 === f,
                    name: 'icon-down-open-mini',
                    className: d,
                    onClick: N(-1),
                  }),
                  (0, i.Z)(u.J, {
                    as: 'button',
                    type: 'button',
                    size: '1.375rem',
                    disabled: _ === f,
                    name: 'icon-down-open-mini',
                    className: m,
                    onClick: N(1),
                  })
                ),
                (0, i.Z)(
                  'div',
                  { className: s()(p, b) },
                  void 0,
                  (0, i.Z)(l.cC, {
                    i18nKey: 'general.pagination',
                    values: M,
                    components: { bold: r || (r = (0, i.Z)('strong', {})) },
                  })
                )
              );
        };
    },
    1170: function (e, t, n) {
      'use strict';
      var r,
        i,
        o,
        a,
        s = n(22928),
        l = n(67294),
        u = n(92667),
        c = n(6026),
        d = l.forwardRef(function (e, t) {
          return l.createElement(
            'div',
            { ref: t },
            'Hello, mouse over me please. I can do everything',
            ' ',
            r || (r = (0, s.Z)('strong', {}, void 0, 'a component can do'))
          );
        });
      d.displayName = 'ChildComponent';
      var m = (0, u.YZ)({
          title: 'Hello',
          content: (0, s.Z)('div', {}, void 0, 'open dropdown'),
          isRemovable: !1,
        }),
        p = {
          content: (0, s.Z)(
            'span',
            {},
            void 0,
            'I am ',
            (0, s.Z)('strong', {}, void 0, 'strong')
          ),
          delay: 100,
          disabled: !1,
          placement: 'top',
          interactive: !0,
        },
        g = {
          content: (0, s.Z)(
            'div',
            {},
            void 0,
            'I am long and I overflow container when interactive: false'
          ),
          interactive: !1,
        };
      t.Z = {
        Default: function () {
          return (0, s.Z)(
            'div',
            {
              style: {
                margin: '6.25rem',
                width: 'auto',
                display: 'inline-block',
                border: '0.0625rem dotted grey',
                padding: '0.25rem',
              },
            },
            void 0,
            l.createElement(c.J, p, i || (i = (0, s.Z)(d, {})))
          );
        },
        InDropdown: function () {
          return (0, s.Z)(
            'div',
            {},
            void 0,
            (0, s.Z)(
              u.Lt,
              { usePortals: !0, width: '100px', Trigger: m },
              void 0,
              o || (o = (0, s.Z)('div', {}, void 0, 'inside content')),
              l.createElement(
                c.J,
                g,
                a || (a = (0, s.Z)('div', {}, void 0, 'inside with tippy'))
              )
            )
          );
        },
      };
    },
    6026: function (e, t, n) {
      'use strict';
      n.d(t, {
        J: function () {
          return l;
        },
      });
      var r = n(87462),
        i = n(45987),
        o = n(67294),
        a = n(87275),
        s = (n(68710), n(8363), ['children']),
        l = function (e) {
          var t = e.children,
            n = (0, i.Z)(e, s);
          return o.createElement(a.ZP, (0, r.Z)({ theme: 'light' }, n), t);
        };
    },
    17230: function (e, t, n) {
      'use strict';
      var r,
        i = n(22928),
        o = n(70885),
        a = n(67294),
        s = n(26387);
      t.Z = {
        Defaults: function () {
          var e = (0, a.useState)(!0),
            t = (0, o.Z)(e, 2),
            n = t[0],
            l = t[1],
            u = (0, a.useCallback)(function () {
              return l(function (e) {
                return !e;
              });
            }, []);
          return (0, i.Z)(
            a.Fragment,
            {},
            void 0,
            (0, i.Z)('button', { onClick: u }, void 0, 'Toggle portal'),
            n
              ? r ||
                  (r = (0, i.Z)(
                    s.h,
                    { id: 'id-notifications' },
                    void 0,
                    (0, i.Z)(
                      'p',
                      {},
                      void 0,
                      'Hello world, rendered with portals. Check dom'
                    )
                  ))
              : null
          );
        },
      };
    },
    26387: function (e, t, n) {
      'use strict';
      n.d(t, {
        h: function () {
          return o;
        },
      });
      var r = n(67294),
        i = n(73935),
        o = function (e) {
          var t = e.testId,
            n = void 0 === t ? 'portalComponent' : t,
            o = e.children,
            a = e.id,
            s = e.mount,
            l = e.className,
            u = (0, r.useRef)(!1),
            c = (0, r.useMemo)(
              function () {
                if (!a) return null;
                var e = document.getElementById(a);
                return (
                  e ||
                    (((e = document.createElement('div')).id = a),
                    e.setAttribute('data-testid', n),
                    s ? s.current.appendChild(e) : document.body.appendChild(e),
                    (u.current = !0)),
                  l && (e.className = l),
                  e
                );
              },
              [a, l, n, s]
            );
          return (
            (0, r.useEffect)(function () {
              return function () {
                c && u.current && c.remove();
              };
            }, []),
            c && o ? (0, i.createPortal)(o, c) : null
          );
        };
    },
    20404: function (e, t, n) {
      'use strict';
      n.d(t, {
        h: function () {
          return r.h;
        },
      });
      var r = n(26387);
    },
    18139: function (e, t, n) {
      'use strict';
      var r = n(22928),
        i = n(70885),
        o = n(67294),
        a = n(28154);
      t.Z = {
        Default: function () {
          var e = (0, o.useState)('2'),
            t = (0, i.Z)(e, 2),
            n = t[0],
            s = t[1],
            l = (0, o.useCallback)(
              function (e) {
                s(e);
              },
              [s]
            );
          return (0, r.Z)(a.G, {
            value: n,
            items: [
              { value: '1', children: 'Radio' },
              { value: '2', children: 'Radio' },
              { value: '3', children: 'Radio' },
            ],
            onChange: l,
          });
        },
      };
    },
    28154: function (e, t, n) {
      'use strict';
      n.d(t, {
        G: function () {
          return m;
        },
      });
      var r = n(22928),
        i = n(4942),
        o = n(67294),
        a = n(94184),
        s = n.n(a),
        l = 'RadioButtons_radioButtons__1SbmU',
        u = 'RadioButtons_radioButtonsLabel__2KHzr',
        c = 'RadioButtons_checked__3fH9s',
        d = 'RadioButtons_radioButtonsInput__27GpD',
        m = function (e) {
          var t,
            n,
            a,
            m = e.items,
            p = void 0 === m ? [] : m,
            g = e.value,
            f = e.name,
            v =
              void 0 === f
                ? 'f'.concat(
                    (null !==
                      (t =
                        null === (n = window) ||
                        void 0 === n ||
                        null === (a = n.performance) ||
                        void 0 === a
                          ? void 0
                          : a.now()) && void 0 !== t
                      ? t
                      : Date.now()
                    ).toString(16)
                  )
                : f,
            h = e.onChange,
            b = (0, o.useCallback)(
              function (e) {
                return function () {
                  h(e);
                };
              },
              [h]
            );
          return p.length
            ? (0, r.Z)(
                'div',
                { className: l, 'data-testid': 'id-radio-buttons' },
                void 0,
                p.map(function (e, t) {
                  return (0,
                  r.Z)('label', { 'data-testid': 'id-radio-buttons-item-'.concat(t), className: s()(u, (0, i.Z)({}, c, e.value === g)) }, t, (0, r.Z)('input', { type: 'radio', name: v, className: d, value: e.value, checked: e.value === g, onChange: b(e.value) }), e.children);
                })
              )
            : null;
        };
    },
    44957: function (e, t, n) {
      'use strict';
      n.d(t, {
        $: function () {
          return u;
        },
        Z: function () {
          return c;
        },
      });
      var r = n(22928),
        i = n(67294),
        o = n(94184),
        a = n.n(o),
        s = n(61873),
        l = {
          spinnerWrapper: 'Spinner_spinnerWrapper__3aSfa',
          spinner: 'Spinner_spinner__1Neu5',
          'sk-stretchdelay': 'Spinner_sk-stretchdelay__8wgiX',
          rect2: 'Spinner_rect2__2LK2O',
          rect3: 'Spinner_rect3__1izyc',
          rect4: 'Spinner_rect4__3KDJk',
          rect5: 'Spinner_rect5__3o6K8',
          rect6: 'Spinner_rect6__3AwAk',
        },
        u = function (e) {
          var t = e.style,
            n = e.className,
            o = e.color,
            u = void 0 === o ? (0, s.MX)('--color-neutral-700') : o,
            c = (0, i.useMemo)(
              function () {
                return { backgroundColor: u };
              },
              [u]
            );
          return (0, r.Z)(
            'div',
            { style: t, className: a()(l.spinner, n) },
            void 0,
            Array.from({ length: 6 }, function (e, t) {
              return t;
            }).map(function (e) {
              return (0,
              r.Z)('div', { className: l['rect'.concat(e + 1)], style: c }, e);
            })
          );
        },
        c = function (e) {
          var t = e.className,
            n = e.children;
          return (0, r.Z)(
            'div',
            { className: a()(l.spinnerWrapper, t) },
            void 0,
            n
          );
        };
    },
    92532: function (e, t, n) {
      'use strict';
      var r = n(22928),
        i = n(67294),
        o = n(22910);
      t.Z = {
        Default: function () {
          var e = (0, i.useMemo)(function () {
              return [
                { name: 'Hello', status: 'Pending', action: 'Delete' },
                { name: 'Hello2', status: 'Access', action: 'Accept' },
              ];
            }, []),
            t = (0, i.useMemo)(function () {
              return [
                { id: '1', headCell: 'Name', accessor: 'name', width: '40%' },
                {
                  id: '2',
                  headCell: 'Status',
                  accessor: function (e) {
                    return ''.concat(e.status, ' - EDITED STATUS');
                  },
                },
              ];
            }, []);
          return (0, r.Z)(o.i, { list: e, config: t });
        },
        RowSpan: function () {
          var e = (0, i.useMemo)(function () {
              return [
                { name: 'Hello', status: 'Pending', action: 'Delete' },
                { name: 'Hello', status: 'Access', action: 'Accept' },
                { name: 'Hello 2', status: 'Pending 2', action: 'Delete 2' },
                { name: 'Hello 2', status: 'Access 2', action: 'Accept 2' },
              ];
            }, []),
            t = (0, i.useMemo)(function () {
              return [
                {
                  id: '1',
                  headCell: 'Name',
                  accessor: 'name',
                  width: '40%',
                  rowSpan: 2,
                },
                {
                  id: '2',
                  headCell: 'Status',
                  accessor: function (e) {
                    return ''.concat(e.status, ' - EDITED STATUS');
                  },
                },
              ];
            }, []);
          return (0, r.Z)(o.i, { list: e, config: t, className: 'c-table' });
        },
        StickyColumn: function () {
          var e = (0, i.useMemo)(function () {
              return Array.from({ length: 2 }, function (e, t) {
                return { id: t };
              });
            }, []),
            t = (0, i.useMemo)(function () {
              return Array.from({ length: 20 }, function (e, t) {
                return {
                  isSticky: 1 === t,
                  id: String(t),
                  headCell: 'Header '.concat(t),
                  accessor: function () {
                    return 'Lorem ipsum dolor sit amet consectetur';
                  },
                };
              });
            }, []);
          return (0, r.Z)(o.i, { list: e, config: t });
        },
        CustomHeaderRow: function () {
          var e = (0, i.useMemo)(function () {
              return Array.from({ length: 2 }, function (e, t) {
                return { id: t };
              });
            }, []),
            t = (0, i.useMemo)(function () {
              return [
                [
                  { children: 'Head Group 1', colSpan: 2 },
                  { children: 'Head Group 2', colSpan: 3 },
                ],
              ];
            }, []),
            n = (0, i.useMemo)(function () {
              return Array.from({ length: 5 }, function (e, t) {
                return {
                  id: String(t),
                  headCell: 'Header '.concat(t),
                  accessor: function () {
                    return 'Lorem ipsum dolor sit amet consectetur';
                  },
                };
              });
            }, []);
          return (0, r.Z)(o.i, { list: e, config: n, headerConfig: t });
        },
        CustomHeaderRows: function () {
          var e = (0, i.useMemo)(function () {
              return Array.from({ length: 2 }, function (e, t) {
                return { id: t };
              });
            }, []),
            t = (0, i.useMemo)(function () {
              return [
                [
                  { children: 'Head Group 1', colSpan: 2 },
                  { children: 'Head Group 2', colSpan: 3 },
                ],
                [
                  { children: 'Header 1' },
                  { children: 'Header 2' },
                  { children: 'Header 3' },
                  { children: 'Header 4' },
                  { children: 'Header 5' },
                ],
                [
                  { children: 'Head Sub Group 1', colSpan: 3 },
                  { children: 'Head Sub Group 2', colSpan: 2 },
                ],
              ];
            }, []),
            n = (0, i.useMemo)(function () {
              return Array.from({ length: 5 }, function (e, t) {
                return {
                  id: String(t),
                  accessor: function () {
                    return 'Lorem ipsum dolor sit amet consectetur';
                  },
                };
              });
            }, []);
          return (0, r.Z)(o.i, { list: e, config: n, headerConfig: t });
        },
      };
    },
    22910: function (e, t, n) {
      'use strict';
      n.d(t, {
        i: function () {
          return _;
        },
      });
      var r = n(22928),
        i = n(87462),
        o = n(4942),
        a = n(45987),
        s = n(70885),
        l = n(67294),
        u = n(94184),
        c = n.n(u),
        d = n(57557),
        m = n.n(d),
        p = n(69088),
        g = {
          tableWrapper: 'Table_tableWrapper__gkU0O',
          tableIsSomeStickyColumn: 'Table_tableIsSomeStickyColumn__2KtvZ',
          primary: 'Table_primary__1E_Kd',
          hasShadow: 'Table_hasShadow__2vz8d',
          hasBorderRadius: 'Table_hasBorderRadius__rED58',
          table: 'Table_table__3cVv6',
          tr: 'Table_tr__12T8R',
          th: 'Table_th__2sVy3',
          hasFooter: 'Table_hasFooter__1cgWX',
          td: 'Table_td__aBNTH',
          'align-left': 'Table_align-left__14X9X',
          'align-center': 'Table_align-center__2wwHn',
          'align-right': 'Table_align-right__2EMbo',
          tableSortIcon: 'Table_tableSortIcon__1KoX6',
          'align-top': 'Table_align-top__1KWID',
          'align-middle': 'Table_align-middle__1Lpd0',
          'align-bottom': 'Table_align-bottom__9Mbz3',
          isSorting: 'Table_isSorting__36EZZ',
          isActive: 'Table_isActive__2oDfq',
          tableEmptyMessage: 'Table_tableEmptyMessage__1BD_b',
        },
        f = [
          'id',
          'accessor',
          'alignH',
          'alignV',
          'isSticky',
          'className',
          'getCellAttrs',
        ],
        v = ['className'],
        h = ['children', 'className', 'isSticky'],
        b = ['id'];
      function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var _ = (0, l.forwardRef)(function (e, t) {
        var n,
          u = e.headerConfig,
          d = e.config,
          y = e.footerConfig,
          _ = e.list,
          M = e.className,
          N = e.classNameWrapper,
          w = e.emptyMessage,
          C = e.variant,
          Z = e.children,
          D = e.hasShadow,
          E = void 0 !== D && D,
          I = e.hasBorderRadius,
          O = void 0 !== I && I,
          L = (0, l.useState)(function () {
            return d.reduce(function (e, t) {
              return (
                t.defaultSortDirection &&
                  !t.id &&
                  console.warn(
                    '`defaultSortDirection` not works because there is no `id` param for config item ',
                    t
                  ),
                t.defaultSortDirection &&
                  t.id &&
                  (e[t.id] = t.defaultSortDirection),
                e
              );
            }, {});
          }),
          A = (0, s.Z)(L, 2),
          S = A[0],
          k = A[1],
          j = (0, l.useMemo)(
            function () {
              return (
                d.some(function (e) {
                  return e.isSticky;
                }) ||
                (null == u
                  ? void 0
                  : u.flat().some(function (e) {
                      return e.isSticky;
                    }))
              );
            },
            [d, u]
          ),
          P = (0, l.useMemo)(
            function () {
              return d.some(function (e) {
                return !!e.headCell;
              });
            },
            [d]
          ),
          x = (0, l.useCallback)(function () {
            var e,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = arguments.length > 1 ? arguments[1] : void 0,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i = m()(n, ['headCell', 'onSort', 'defaultSortDirection']),
              o = i.id,
              s = i.accessor,
              l = i.alignH,
              u = i.alignV,
              d = i.isSticky,
              p = i.className,
              v = i.getCellAttrs,
              h = (0, a.Z)(i, f),
              b = null == v ? void 0 : v(t, r);
            return T(
              T(T({}, h), b),
              {},
              {
                id: o,
                scope: d ? 'row' : void 0,
                className: c()(
                  g.td,
                  null !== (e = null == b ? void 0 : b.className) &&
                    void 0 !== e
                    ? e
                    : p,
                  g['align-'.concat(l)],
                  g['align-'.concat(u)]
                ),
                children:
                  'function' == typeof s
                    ? s(t, r)
                    : 'string' == typeof s || 'number' == typeof s
                    ? null == t
                      ? void 0
                      : t[s]
                    : s,
              }
            );
          }, []),
          R = (0, l.useCallback)(
            function (e, t, n) {
              return function () {
                var r = 1 === S[e] ? -1 : 1;
                k((0, o.Z)({}, e, r)), n(r, t);
              };
            },
            [S]
          ),
          z = (0, l.useCallback)(function (e, t) {
            k((0, o.Z)({}, e, t));
          }, []);
        return (
          (0, l.useImperativeHandle)(
            t,
            function () {
              return { changeSortDirection: z };
            },
            [z]
          ),
          w || (null != _ && _.length)
            ? (0, r.Z)(
                'div',
                {
                  role: 'region',
                  tabIndex: -1,
                  className: c()(
                    g.tableWrapper,
                    N,
                    g[C || ''],
                    ((n = {}),
                    (0, o.Z)(n, g.tableIsSomeStickyColumn, j),
                    (0, o.Z)(n, g.hasShadow, E),
                    (0, o.Z)(n, g.hasBorderRadius, O),
                    (0, o.Z)(n, g.hasFooter, !!y),
                    n)
                  ),
                },
                void 0,
                (0, r.Z)(
                  'table',
                  { className: c()(g.table, M) },
                  void 0,
                  null != y && y.length
                    ? (0, r.Z)(
                        'tfoot',
                        {},
                        void 0,
                        y.map(function (e, t) {
                          return (0, r.Z)(
                            'tr',
                            { className: g.tr },
                            t,
                            e.map(function (e, t) {
                              var n = e.className,
                                r = (0, a.Z)(e, v);
                              return l.createElement(
                                'td',
                                (0, i.Z)({}, r, {
                                  key: t,
                                  className: c()(g.td, n),
                                })
                              );
                            })
                          );
                        })
                      )
                    : null,
                  (0, r.Z)(
                    'thead',
                    {},
                    void 0,
                    null == u
                      ? void 0
                      : u.map(function (e, t) {
                          return (0, r.Z)(
                            'tr',
                            { className: c()(g.tr) },
                            t,
                            e.map(function (e, t) {
                              var n = e.children,
                                r = e.className,
                                o = e.isSticky,
                                s = void 0 !== o && o,
                                u = (0, a.Z)(e, h);
                              return l.createElement(
                                'th',
                                (0, i.Z)({}, u, {
                                  key: t,
                                  className: c()(g.th, r),
                                  scope: s ? 'row' : void 0,
                                }),
                                n
                              );
                            })
                          );
                        }),
                    P
                      ? (0, r.Z)(
                          'tr',
                          { className: c()(g.tr) },
                          void 0,
                          d.map(function (e, t) {
                            var n,
                              i = e.id,
                              a = e.headCell,
                              s = e.alignH,
                              l = e.alignV,
                              u = e.onSort,
                              d = e.isSticky;
                            return (0,
                            r.Z)('th', { className: c()(g.th, g['align-'.concat(s)], g['align-'.concat(l)], ((n = {}), (0, o.Z)(n, g.isActive, void 0 !== S[i]), (0, o.Z)(n, g.isSorting, !!u), n)), onClick: u ? R(i, t, u) : void 0, scope: d ? 'row' : void 0 }, t, s && 'right' === s ? null : a, u ? (0, r.Z)(p.J, { className: c()(g.tableSortIcon, (0, o.Z)({}, g.isActive, S[i])), category: 'modern', name: 1 === S[i] ? 'arrow_upward' : 'arrow_downward', size: '0.875rem' }) : null, s && 'right' === s ? a : null);
                          })
                        )
                      : null
                  ),
                  (0, r.Z)(
                    'tbody',
                    {},
                    void 0,
                    _.map(function (e, t) {
                      return (0, r.Z)(
                        'tr',
                        { className: g.tr, onClick: e.onClick },
                        e.id || t,
                        d.map(function (n, r) {
                          var o = x(e, n, { rowIndex: t, cellIndex: r }),
                            s = o.id,
                            u = (0, a.Z)(o, b);
                          return 'number' == typeof u.rowSpan &&
                            (t + 1) % 2 == 0
                            ? null
                            : l.createElement(
                                'td',
                                (0, i.Z)({}, u, { key: s || r })
                              );
                        })
                      );
                    }),
                    !w || (null != _ && _.length)
                      ? null
                      : (0, r.Z)(
                          'tr',
                          { className: g.tr },
                          void 0,
                          (0, r.Z)(
                            'td',
                            {
                              colSpan: d.length,
                              className: c()(g.td, g.tableEmptyMessage),
                            },
                            void 0,
                            w
                          )
                        )
                  )
                ),
                Z
              )
            : null
        );
      });
    },
    92853: function (e, t, n) {
      'use strict';
      var r = n(22928),
        i = n(70885),
        o = n(67294),
        a = n(4777),
        s = [{ label: 'Tab 1' }, { label: 'Tab 2' }];
      t.Z = {
        Default: function (e) {
          var t = e.defaultActiveIndex,
            n = void 0 === t ? 0 : t,
            l = (0, o.useState)(n),
            u = (0, i.Z)(l, 2),
            c = u[0],
            d = u[1],
            m = (0, o.useCallback)(function (e) {
              d(e.index);
            }, []);
          return (0, r.Z)(
            o.Fragment,
            {},
            void 0,
            (0, r.Z)(a.m, { defaultActiveIndex: n, list: s, onChange: m }),
            (0, r.Z)('p', {}, void 0, 'Tab content ', c + 1)
          );
        },
        Contained: function (e) {
          var t = e.defaultActiveIndex,
            n = void 0 === t ? 0 : t,
            l = (0, o.useState)(n),
            u = (0, i.Z)(l, 2),
            c = u[0],
            d = u[1],
            m = (0, o.useCallback)(function (e) {
              d(e.index);
            }, []);
          return (0, r.Z)(
            o.Fragment,
            {},
            void 0,
            (0, r.Z)(a.m, {
              variant: 'contained',
              defaultActiveIndex: n,
              list: s,
              onChange: m,
            }),
            (0, r.Z)('p', {}, void 0, 'Tab content ', c + 1)
          );
        },
      };
    },
    4777: function (e, t, n) {
      'use strict';
      n.d(t, {
        m: function () {
          return g;
        },
      });
      var r = n(22928),
        i = n(4942),
        o = n(70885),
        a = n(67294),
        s = n(94184),
        l = n.n(s),
        u = n(79087),
        c = n(69088),
        d = 'Tabs_tabs__HvDAh',
        m = 'Tabs_tabsListItem__2ab9Q',
        p = 'Tabs_isActive__36fWu',
        g = (0, a.forwardRef)(function (e, t) {
          var n = e.className,
            s = e.list,
            g = e.defaultActiveIndex,
            f = void 0 === g ? 0 : g,
            v = e.onChange,
            h = (0, a.useRef)(!1),
            b = (0, a.useState)(f),
            y = (0, o.Z)(b, 2),
            T = y[0],
            _ = y[1],
            M = l()(d, n),
            N = (0, a.useCallback)(function (e) {
              return function () {
                _(e);
              };
            }, []),
            w = (0, a.useCallback)(function (e) {
              return function (t) {
                t.stopPropagation(), null == e || e(t);
              };
            }, []);
          return (
            (0, a.useEffect)(
              function () {
                h.current && (null == v || v({ index: T }));
              },
              [T]
            ),
            (0, a.useEffect)(function () {
              return (
                (h.current = !0),
                function () {
                  h.current = !1;
                }
              );
            }, []),
            (0, a.useImperativeHandle)(
              t,
              function () {
                return { setActiveIndex: _ };
              },
              []
            ),
            (0, r.Z)(
              'div',
              {
                'data-testid': 'id-tabs',
                role: 'tablist',
                'aria-label': 'Tabs',
                className: M,
              },
              void 0,
              s.map(function (e, t) {
                var n = T === t,
                  o = l()(
                    m,
                    e.className,
                    (0, i.Z)({}, p, n),
                    e.classNameActive
                      ? (0, i.Z)({}, e.classNameActive, n)
                      : null
                  );
                return (0,
                r.Z)('button', { type: 'button', role: 'tab', 'aria-selected': n ? 'true' : 'false', disabled: e.disabled, className: o, onClick: N(t) }, t, e.label, void 0 !== e.count ? (0, r.Z)(u.A, { count: e.count }) : null, e.isClosable ? (0, r.Z)(c.J, { name: 'icon-close', onClick: w(e.onClose) }) : null);
              })
            )
          );
        });
      g.displayName = 'Tabs';
    },
    3378: function (e, t, n) {
      'use strict';
      var r,
        i = n(22928),
        o = (n(67294), n(47482));
      t.Z = {
        Default: function () {
          return r || (r = (0, i.Z)(o.V, {}, void 0, 'Hello world'));
        },
      };
    },
    47482: function (e, t, n) {
      'use strict';
      n.d(t, {
        V: function () {
          return s;
        },
      });
      var r = n(22928),
        i = (n(67294), n(94184)),
        o = n.n(i),
        a = 'Tag_tag__1jDVB',
        s = function (e) {
          var t = e.children,
            n = e.className;
          return void 0 !== t
            ? (0, r.Z)(
                'span',
                { 'data-testid': 'id-tag', className: o()(a, n) },
                void 0,
                t
              )
            : null;
        };
    },
    67243: function (e, t, n) {
      'use strict';
      var r,
        i = n(22928),
        o = (n(67294), n(66826));
      t.Z = {
        Default: function () {
          return r || (r = (0, i.Z)(o.g, {}));
        },
      };
    },
    66826: function (e, t, n) {
      'use strict';
      n.d(t, {
        g: function () {
          return c;
        },
      });
      var r = n(87462),
        i = n(45987),
        o = n(67294),
        a = n(94184),
        s = n.n(a),
        l = 'Textarea_textarea__3SOgQ Input_input__3PNbO',
        u = ['id', 'className'],
        c = (0, o.forwardRef)(function (e, t) {
          var n = e.id,
            a = void 0 === n ? 'f'.concat(Date.now().toString(16)) : n,
            c = e.className,
            d = (0, i.Z)(e, u);
          return o.createElement(
            'textarea',
            (0, r.Z)({ 'data-testid': 'id-textarea' }, d, {
              id: a,
              ref: t,
              className: s()(l, c),
            })
          );
        });
      c.displayName = 'Textarea';
    },
    41198: function (e, t, n) {
      'use strict';
      n.d(t, {
        D: function () {
          return c;
        },
      });
      var r = n(87462),
        i = n(45987),
        o = n(67294),
        a = n(94184),
        s = n.n(a),
        l = {
          title: 'Title_title__1jlrO',
          h1: 'Title_h1__3Xh9D',
          h2: 'Title_h2__35PCY',
          h3: 'Title_h3__1ssWb',
          h4: 'Title_h4__3Vig2',
        },
        u = ['type', 'className', 'children'],
        c = function (e) {
          var t = e.type,
            n = void 0 === t ? 'h1' : t,
            a = e.className,
            c = e.children,
            d = (0, i.Z)(e, u),
            m = n;
          return o.createElement(
            m,
            (0, r.Z)({}, d, { className: s()(l.title, l[n], a) }),
            c
          );
        };
    },
    94561: function (e, t, n) {
      'use strict';
      var r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        d,
        m,
        p,
        g,
        f,
        v,
        h,
        b,
        y,
        T,
        _ = n(87462),
        M = n(22928),
        N = n(67294),
        w = n(26360),
        C = n(14039),
        Z = function () {
          return alert('Close');
        };
      t.Z = {
        Default: function () {
          return (
            r ||
            (r = (0, M.Z)(
              N.Fragment,
              {},
              void 0,
              (0, M.Z)(w.F, { type: 'error' }, void 0, 'Error'),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(w.F, { type: 'warning' }, void 0, 'Warning'),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(w.F, { type: 'success' }, void 0, 'Success'),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(w.F, { type: 'info' }, void 0, 'Info')
            ))
          );
        },
        WithClose: function () {
          return (
            i ||
            (i = (0, M.Z)(
              N.Fragment,
              {},
              void 0,
              (0, M.Z)(w.F, { type: 'error', onClose: Z }, void 0, 'Error'),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(w.F, { type: 'warning', onClose: Z }, void 0, 'Warning'),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(w.F, { type: 'success', onClose: Z }, void 0, 'Success'),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(w.F, { type: 'info', onClose: Z }, void 0, 'Info')
            ))
          );
        },
        WithCustomTitle: function () {
          return (
            o ||
            (o = (0, M.Z)(
              N.Fragment,
              {},
              void 0,
              (0, M.Z)(
                w.F,
                { type: 'error', title: 'Lorem ipsum dolor sit' },
                void 0,
                'Error'
              ),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(
                w.F,
                { type: 'warning', title: 'Lorem ipsum dolor sit' },
                void 0,
                'Warning'
              ),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(
                w.F,
                { type: 'success', title: 'Lorem ipsum dolor sit' },
                void 0,
                'Success'
              ),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(
                w.F,
                { type: 'info', title: 'Lorem ipsum dolor sit' },
                void 0,
                'Info'
              )
            ))
          );
        },
        WithNoTitle: function () {
          return (
            a ||
            (a = (0, M.Z)(
              N.Fragment,
              {},
              void 0,
              (0, M.Z)(
                w.F,
                { type: 'error', title: '' },
                void 0,
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum eligendi nostrum amet aliquid quasi? Vitae at voluptatum nisi error ducimus provident quia ratione, praesentium accusamus esse nulla nostrum illo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum eligendi nostrum amet aliquid quasi? Vitae at voluptatum nisi error ducimus provident quia ratione, praesentium accusamus esse nulla nostrum illo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum eligendi nostrum amet aliquid quasi? Vitae at voluptatum nisi error ducimus provident quia ratione, praesentium accusamus esse nulla nostrum illo?'
              ),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(
                w.F,
                { type: 'warning', title: '' },
                void 0,
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum eligendi nostrum amet aliquid quasi? Vitae at voluptatum nisi error ducimus provident quia ratione, praesentium accusamus esse nulla nostrum illo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum eligendi nostrum amet aliquid quasi? Vitae at voluptatum nisi error ducimus provident quia ratione, praesentium accusamus esse nulla nostrum illo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum eligendi nostrum amet aliquid quasi? Vitae at voluptatum nisi error ducimus provident quia ratione, praesentium accusamus esse nulla nostrum illo?'
              ),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(
                w.F,
                { type: 'success', title: '' },
                void 0,
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum eligendi nostrum amet aliquid quasi? Vitae at voluptatum nisi error ducimus provident quia ratione, praesentium accusamus esse nulla nostrum illo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum eligendi nostrum amet aliquid quasi? Vitae at voluptatum nisi error ducimus provident quia ratione, praesentium accusamus esse nulla nostrum illo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum eligendi nostrum amet aliquid quasi? Vitae at voluptatum nisi error ducimus provident quia ratione, praesentium accusamus esse nulla nostrum illo?'
              ),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(
                w.F,
                { type: 'info', title: '' },
                void 0,
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum eligendi nostrum amet aliquid quasi? Vitae at voluptatum nisi error ducimus provident quia ratione, praesentium accusamus esse nulla nostrum illo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum eligendi nostrum amet aliquid quasi? Vitae at voluptatum nisi error ducimus provident quia ratione, praesentium accusamus esse nulla nostrum illo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum eligendi nostrum amet aliquid quasi? Vitae at voluptatum nisi error ducimus provident quia ratione, praesentium accusamus esse nulla nostrum illo?'
              )
            ))
          );
        },
        WithPortals: function () {
          return (
            s ||
            (s = (0, M.Z)(
              N.Fragment,
              {},
              void 0,
              (0, M.Z)(w.F, { usePortals: !0, type: 'error' }, void 0, 'Error'),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(
                w.F,
                { usePortals: !0, type: 'warning' },
                void 0,
                'Warning'
              ),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(
                w.F,
                { usePortals: !0, type: 'success' },
                void 0,
                'Success'
              ),
              (0, M.Z)('br', {}),
              (0, M.Z)('br', {}),
              (0, M.Z)(
                w.F,
                { usePortals: !0, type: 'info', onClose: Z },
                void 0,
                'Info'
              )
            ))
          );
        },
        WithHook: function () {
          var e = (0, C.p)({ isOpen: !1 }),
            t = (0, C.p)(),
            n = (0, C.p)();
          return (0, M.Z)(
            N.Fragment,
            {},
            void 0,
            (0, M.Z)(
              'button',
              { type: 'button', onClick: e.openToast, disabled: e.isOpen },
              void 0,
              'Open error toast'
            ),
            l || (l = (0, M.Z)('br', {})),
            u || (u = (0, M.Z)('br', {})),
            (0, M.Z)(
              'button',
              { type: 'button', onClick: n.openToast, disabled: n.isOpen },
              void 0,
              'Open info toast'
            ),
            c || (c = (0, M.Z)('br', {})),
            d || (d = (0, M.Z)('br', {})),
            null != t && t.isOpen
              ? m ||
                  (m = (0, M.Z)(
                    'p',
                    {},
                    void 0,
                    'Success toast will be closed in ',
                    5,
                    ' sec'
                  ))
              : p || (p = (0, M.Z)('p', {}, void 0, 'Success closed')),
            N.createElement(
              w.F,
              (0, _.Z)({ usePortals: !0, hasShadow: !0, type: 'error' }, e),
              'Error'
            ),
            g || (g = (0, M.Z)('br', {})),
            f || (f = (0, M.Z)('br', {})),
            v ||
              (v = (0, M.Z)(
                w.F,
                { usePortals: !0, hasShadow: !0, type: 'warning' },
                void 0,
                'Warning'
              )),
            h || (h = (0, M.Z)('br', {})),
            b || (b = (0, M.Z)('br', {})),
            N.createElement(
              w.F,
              (0, _.Z)(
                {
                  usePortals: !0,
                  hasShadow: !0,
                  type: 'success',
                  autoCloseDelay: 5e3,
                },
                t
              ),
              'Success'
            ),
            y || (y = (0, M.Z)('br', {})),
            T || (T = (0, M.Z)('br', {})),
            N.createElement(
              w.F,
              (0, _.Z)({ usePortals: !0, hasShadow: !0, type: 'info' }, n),
              'Info'
            )
          );
        },
      };
    },
    26360: function (e, t, n) {
      'use strict';
      n.d(t, {
        F: function () {
          return b;
        },
      });
      var r = n(45987),
        i = n(22928),
        o = n(4942),
        a = n(67294),
        s = n(94184),
        l = n.n(s),
        u = n(61873),
        c = n(86485),
        d = n(69088),
        m = n(41198),
        p = n(20404),
        g = {
          toastsLayout: 'Toast_toastsLayout__zgLMc',
          toast: 'Toast_toast__2Hubc',
          toastTitle: 'Toast_toastTitle__LWc3e',
          toastIcon: 'Toast_toastIcon__3Vxlo',
          toastIconClose: 'Toast_toastIconClose__hnDvh',
          toastContent: 'Toast_toastContent__26oCo',
          hasShadow: 'Toast_hasShadow__zS3sH',
          error: 'Toast_error__2D5iN',
          warning: 'Toast_warning__3_-u2',
          success: 'Toast_success__30BVA',
          info: 'Toast_info__R8_df',
        },
        f = ['isOpen'],
        v = {
          error: 'error',
          warning: 'report_problem',
          success: 'success',
          info: 'info2',
        },
        h = function (e) {
          var t,
            n,
            r,
            s = e.children,
            f = e.type,
            h = e.layoutClassName,
            b = e.className,
            y = e.title,
            T = e.usePortals,
            _ = void 0 !== T && T,
            M = e.hasShadow,
            N = void 0 !== M && M,
            w = e.autoCloseDelay,
            C = e.onClose,
            Z = (0, c.$G)().t,
            D = (0, i.Z)(
              'div',
              {
                'data-testid': 'toastComponent',
                className: l()(g.toast, g[f], b, (0, o.Z)({}, g.hasShadow, N)),
              },
              void 0,
              (0, i.Z)(d.J, {
                className: g.toastIcon,
                name: v[f],
                category: 'modern',
                size: '1.5rem',
              }),
              (0, i.Z)(
                'div',
                { className: g.toastContent },
                void 0,
                (0, i.Z)(
                  m.D,
                  { type: 'h4', className: g.toastTitle },
                  void 0,
                  void 0 === y ? Z('general.'.concat(f)) : y
                ),
                s
              ),
              C
                ? (0, i.Z)(d.J, {
                    isSpacing: !0,
                    as: 'button',
                    name: 'close',
                    category: 'modern',
                    color: (0, u.MX)('--color-neutral-300'),
                    className: g.toastIconClose,
                    onClick: C,
                  })
                : null
            );
          return (
            (t = C),
            (n = w),
            (r = (0, a.useRef)(t)),
            (0, a.useLayoutEffect)(
              function () {
                r.current = t;
              },
              [t]
            ),
            (0, a.useEffect)(
              function () {
                var e;
                return (
                  r.current &&
                    n &&
                    (e = setTimeout(function () {
                      var e;
                      return null === (e = r.current) || void 0 === e
                        ? void 0
                        : e.call(r);
                    }, n)),
                  function () {
                    e && clearTimeout(e);
                  }
                );
              },
              [n]
            ),
            _
              ? (0, i.Z)(
                  p.h,
                  { id: 'id-toasts', className: l()(g.toastsLayout, h) },
                  void 0,
                  D
                )
              : D
          );
        },
        b = function (e) {
          var t = e.isOpen,
            n = void 0 === t || t,
            i = (0, r.Z)(e, f);
          return n ? a.createElement(h, i) : null;
        };
    },
    14039: function (e, t, n) {
      'use strict';
      n.d(t, {
        p: function () {
          return o;
        },
      });
      var r = n(70885),
        i = n(67294),
        o = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.isOpen,
            n = void 0 === t || t,
            o = (0, i.useState)(n),
            a = (0, r.Z)(o, 2),
            s = a[0],
            l = a[1],
            u = (0, i.useCallback)(function () {
              return l(!0);
            }, []),
            c = (0, i.useCallback)(function () {
              return l(!1);
            }, []);
          return { isOpen: s, openToast: u, closeToast: c, onClose: c };
        };
    },
    16289: function (e, t, n) {
      'use strict';
      var r,
        i = n(22928),
        o = (n(67294), n(99205));
      t.Z = {
        Default: function () {
          return (
            r ||
            (r = (0, i.Z)(
              'form',
              { action: '#' },
              void 0,
              (0, i.Z)(o.Z, { name: 'text' }),
              (0, i.Z)('br', {}),
              (0, i.Z)('br', {}),
              (0, i.Z)(o.Z, { name: 'text', defaultChecked: !0 })
            ))
          );
        },
      };
    },
    99205: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var r = n(22928),
        i = n(87462),
        o = n(45987),
        a = n(67294),
        s = n(94184),
        l = n.n(s),
        u = 'ToggleSwitch_toggleSwitch__2p9Q1',
        c = 'ToggleSwitch_toggleSwitchInput__34pzW',
        d = 'ToggleSwitch_toggleSwitchSlider__3IsMF',
        m = ['className'],
        p = (0, a.forwardRef)(function (e, t) {
          var n = e.className,
            s = (0, o.Z)(e, m);
          return (0,
          r.Z)('label', { className: l()(u, n) }, void 0, a.createElement('input', (0, i.Z)({}, s, { ref: t, type: 'checkbox', className: c })), (0, r.Z)('div', { className: d }));
        });
      p.displayName = 'ToggleSwitch';
    },
    92667: function (e, t, n) {
      'use strict';
      n.d(t, {
        zx: function () {
          return o.z;
        },
        AT: function () {
          return T.A;
        },
        C0: function () {
          return v;
        },
        Lt: function () {
          return s.L;
        },
        WA: function () {
          return s.W;
        },
        JO: function () {
          return a.J;
        },
        u_: function () {
          return u.u;
        },
        Dx: function () {
          return i.D;
        },
        cC: function () {
          return _.c;
        },
        YZ: function () {
          return p.Y;
        },
      });
      n(34594);
      var r = n(67294),
        i = (n(71364), n(94184), n(41198)),
        o = n(64517),
        a = n(69088),
        s = n(74416),
        l =
          (n(53181),
          n(80562),
          n(47482),
          n(47684),
          n(74435),
          n(45901),
          n(61873));
      n(82492), n(22910), n(97570);
      var u = n(99753),
        c = (n(4490), n(71669), n(61719), n(81683), n(4942));
      n(12624), n(53324), n(66826);
      var d,
        m = n(14162),
        p = (n(44734), n(77402)),
        g = n(87462),
        f = n(22928),
        v = function (e) {
          var t = e.from,
            n = e.to,
            i = e.format,
            o = (0, r.useMemo)(
              function () {
                return (0, l.rx)(t, n, i);
              },
              [i, t, n]
            );
          return (0, f.Z)(r.Fragment, {}, void 0, o);
        };
      (0, r.forwardRef)(function (e, t) {
        var n,
          i,
          o,
          s,
          l,
          u,
          c,
          p,
          h,
          b,
          y,
          T,
          _,
          M,
          N,
          w,
          C =
            null == e ||
            null === (n = e.children) ||
            void 0 === n ||
            null === (i = n[0]) ||
            void 0 === i ||
            null === (o = i.props) ||
            void 0 === o ||
            null === (s = o.children) ||
            void 0 === s ||
            null === (l = s.props) ||
            void 0 === l ||
            null === (u = l.children) ||
            void 0 === u ||
            null === (c = u[0]) ||
            void 0 === c ||
            null === (p = c.props) ||
            void 0 === p
              ? void 0
              : p.date,
          Z =
            null == e ||
            null === (h = e.children) ||
            void 0 === h ||
            null === (b = h[0]) ||
            void 0 === b ||
            null === (y = b.props) ||
            void 0 === y ||
            null === (T = y.children) ||
            void 0 === T ||
            null === (_ = T.props) ||
            void 0 === _ ||
            null === (M = _.children) ||
            void 0 === M ||
            null === (N = M[3]) ||
            void 0 === N ||
            null === (w = N.props) ||
            void 0 === w
              ? void 0
              : w.date;
        return r.createElement(
          'button',
          (0, g.Z)({}, e, { ref: t, className: m.Z.filterTrigger }),
          (0, f.Z)(a.J, {
            name: 'icon-calendar',
            color: '#000',
            className: m.Z.filterIconCalendar,
          }),
          (0, f.Z)(
            'span',
            { className: m.Z.filterDatepickerValue },
            void 0,
            (0, f.Z)(v, { from: C, to: Z })
          ),
          d ||
            (d = (0, f.Z)(a.J, {
              name: 'icon-down-open-mini',
              color: 'rgba(0, 0, 0, 0.3)',
            }))
        );
      }).displayName = 'TriggerDatePicker';
      var h = n(12051),
        b = (0, r.forwardRef)(function (e, t) {
          var n = e.date,
            i = e.onClick,
            o = !e.className.includes('active'),
            a = null == n ? void 0 : n[0],
            s = (null == n ? void 0 : n[1]) || (null == n ? void 0 : n[0]),
            l = (0, f.Z)(v, { from: a, to: s });
          return r.createElement(h.e, {
            'aria-hidden': o,
            ref: t,
            iconName: 'icon-modern-calendar',
            content: l,
            onClick: i,
          });
        });
      b.displayName = 'FilterTriggerDatePicker';
      n(4174), n(98391), n(4777), n(86485), n(99205);
      var y,
        T = n(79087),
        _ = (n(20404), n(6026), n(87598), n(68630), n(44957), n(89116)),
        M = (n(2707), n(6002), n(45987)),
        N = ['children'];
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                (0, c.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      (0, r.forwardRef)(function (e, t) {
        var n = e.children,
          i = (0, M.Z)(e, N);
        return (0,
        f.Z)(r.Suspense, { fallback: y || (y = (0, f.Z)(r.Fragment, {})) }, void 0, n ? (0, r.cloneElement)(n, C(C({}, i), {}, { ref: t })) : n);
      }).displayName = 'SuspenseProvider';
      n(87384), n(73314), n(26360), n(14039), n(28154);
    },
    87598: function (e, t, n) {
      'use strict';
      n.d(t, {
        Hu: function () {
          return O;
        },
        m$: function () {
          return I;
        },
        ZP: function () {
          return o;
        },
      });
      var r,
        i,
        o = {
          PRINT_HIDE_CLASS_NAME: 'print-hide',
          PRINT_PAGE_BREAK_CLASS_NAME: 'print-page-break',
          ACTIVE_USER_GROUP: 'active-user-group',
          LOGIN_TOKEN_NAME: 'access-token',
          SET_GLOBAL_STATE: 'SET_GLOBAL_STATE',
          SERVER_DATE_FORMAT: 'YYYYMMDD',
          ASCENDING: 'ascending',
          DESCENDING: 'descending',
          GROUPS: 'groups',
          PAGE_SIZE: 30,
          AIR_TIME: 'Air Time',
          AIR_TIME_VALUE: 'airTime',
          CONTENT: 'Content',
          DAY_FORMAT: 'YYYY-MM-DD',
          DAY_START_OFFSET: 3,
          ALL_VALUE: -1,
          TOTAL_ALL_VALUE: -2,
          DEFAULT_DATE_FORMAT: 'll',
          TIME_FORMAT_BACKEND: 'YYYY-MM-DDTHH:mm:ssZ',
          TIME_FORMAT_DATETIME: 'lll',
          TIME_FORMAT_DATE: 'll',
          TIME_FORMAT_DATE_YEAR: 'll',
          TIME_FORMAT_DATE_YEAR_FULL: 'll',
          TIME_FORMAT_DATE_YEAR_HOUR: 'lll',
          TIME_FORMAT_HOUR: 'HH:mm',
          TIME_FORMAT_SECONDS: ':ss',
          TIME_FORMAT_MONTH: 'MMM',
          TIME_FORMAT_MONTH_YEAR: 'll',
          TIME_INTERVAL: 'time.interval',
          TIME_INTERVAL_NEXT: 'time.interval.next',
          SHARE: 'share',
          MODE_VOD_VALUE: 3,
          MODE_TVOD_VALUE: 7,
          MODE_SVOD_VALUE: 8,
          MODE_LINEAR_MIN_VALUE: 65,
          MODE_LINEAR_MAX_VALUE: 128,
          MODE_OFF_VALUE: 0,
          DOWN: 'down',
          UP: 'up',
          AVG: 'avg',
          TREND: 'linearTrend',
          PAGE_AUDIENCE: 'main.audience',
          PAGE_AUDIENCE_EDIT: 'main.audience.edit',
          PAGE_AUDIENCE_LIST: 'main.audience.list',
          PAGE_AUDIENCE_BUILDER: 'main.audience-builder',
          PAGE_AUDIENCE_BUILDER_LIST: 'main.audience-builder.list',
          PAGE_AUDIENCE_BUILDER_BUILD: 'main.audience-builder.build',
          PAGE_AUDIENCE_BUILDER_IMPORT: 'main.audience-builder.import',
          PAGE_BUDGETING: 'main.budgeting',
          PAGE_CAMPAIGN_LIST: 'main.campaigns.list',
          PAGE_CAMPAIGN_REPORT: 'main.campaigns.report',
          PAGE_EXPORTER: 'main.exporter',
          PAGE_INDEX: 'main.index',
          PAGE_LIVE: 'main.live',
          PAGE_OVERVIEW: 'main.overview',
          PAGE_SEGMENTATION: 'main.segmentation',
          EXPORTER: 'exporter',
          SEGMENTATION: 'segmentation',
          SUB_OVERVIEW: 'overview.dimension',
          DIMENSION: 'dimension',
          ATTRIBUTE: 'attribute',
          EMAIL_PATTERN: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
          USER_ROLES: ['user', 'admin', 'master'],
          COUNTRY: 'country',
          PLATFORM: 'platform',
          DATASET_TYPES: ['country', 'platform'],
          DATASET_UNITS: ['subscriber', 'household'],
          EXPORT_STARTED_TITLE: 'Your export has started',
          EXPORT_STARTED:
            'The exporting process has successfully started. The file may take some time to generate.',
          EXPORT_READY: 'Your export is ready',
          EXPORT_FAILED:
            'The exporting process failed. Please try again. If the problem persists, contact our customer service and we will look into it.',
          EXPORT_DOWNLOAD: "You will be able to download it when it's done.",
          COMPLETED: 'completed',
          FAILED: 'failed',
          SUBSCRIBERS_IMPORT_STARTED:
            'The subscribers list importing process has successfully started. The process may take some time to finish.',
          VIEWS: 'views',
          FREQUENCY: 'frequency2',
          VIEWING: 'viewing',
          ADS: 'ads',
          QUERY_LIMIT: 5e3,
          VIEWERSHIP: 'viewership',
          AD_INVENTORY: 'adInventory',
          EVENT_DOMAIN_EPG: 'epg',
          EVENT_DOMAIN_EVENT: 'event',
          NUMBER_DISPLAY_TYPE_WHOLE: 'whole',
          NUMBER_DISPLAY_TYPE_ROUNDED: 'rounded',
          FREEWHEEL_REPORTS_URL:
            'https://mrm.freewheel.tv/ui/144750/campaign/spa/campaigns/mrm/',
          OPERATIONAL_REPORTS_CAMPAIGNS_FILTER:
            'OPERATIONAL_REPORTS_CAMPAIGNS_FILTER',
          AUDIENCE_AGGREGATION_LIMIT: 'AUDIENCE_AGGREGATION_LIMIT',
          AUDIENCE_EDIT_CONTEXT: 'AUDIENCE_EDIT_CONTEXT',
          AUDIENCE_UNIT: {
            common: 'subscriber',
            canalplus: 'user',
            proximus: 'device',
            sky_media: 'user',
          },
          AUDIENCE_UNITS: {
            common: 'subscribers',
            canalplus: 'users',
            proximus: 'devices',
            sky_media: 'users',
          },
          MINUTE: 'minute',
          HOUR: 'hour',
          MINUTE_UNIT_LABEL: ' min',
          HOUR_UNIT_LABEL: ' h',
          DATASET_PRODUCT_TYPES: [
            { label: 'Audience Measurement', value: 'viewership' },
            { label: 'Inventory Management', value: 'adInventory' },
          ],
          STATUSES: {
            IN_ACTIVE: 'IN_ACTIVE',
            COMPLETED: 'COMPLETED',
            CANCELLED: 'CANCELLED',
            ACTIVE: 'ACTIVE',
          },
          DOCUMENTATION_PRODUCT: 'https://docs.tvbeat.com?u=tvbeat&p=private',
          DOCUMENTATION_DEVELOPER: 'https://apidocs.tvbeat.com/',
          DOCUMENTATION_TERMS: 'https://tvbeat-legal.snazzydocs.com/docs',
          DELTA: { 1: 'ASC', '-1': 'DESC' },
          DELTA_STR: { ASC: 1, DESC: -1 },
          WEEK: [
            {
              key: 'Mo',
              label: 'general.monday',
              short: 'general.mondayShort',
            },
            {
              key: 'Tu',
              label: 'general.tuesday',
              short: 'general.tuesdayShort',
            },
            {
              key: 'We',
              label: 'general.wednesday',
              short: 'general.wednesdayShort',
            },
            {
              key: 'Th',
              label: 'general.thursday',
              short: 'general.thursdayShort',
            },
            {
              key: 'Fr',
              label: 'general.friday',
              short: 'general.fridayShort',
            },
            {
              key: 'Sa',
              label: 'general.saturday',
              short: 'general.saturdayShort',
            },
            {
              key: 'Su',
              label: 'general.sunday',
              short: 'general.sundayShort',
            },
          ],
          CHART_TYPES: { BAR: 'bar-chart', PIE: 'pie-chart' },
          OPERATORS: { Count: '+', Percentage: '×' },
          ALTERATION_METRIC: ['Impressions', 'Reach'],
        },
        a = n(4942),
        s = n(8686),
        l = s.Db.CHANNEL,
        u = s.Db.CHANNEL_GROUP,
        c = s.Db.CHANNEL_PROVIDERS,
        d = s.Db.CONTENT,
        m = s.Db.CONTENT_GENRE,
        p = s.Db.CONTENT_SUBGENRE,
        g = s.Db.DEVICE,
        f = s.Db.MODE,
        v = s.Db.PACKAGE,
        h = s.Db.RESOLUTION,
        b = s.Db.REGION,
        y = s.oX.COLUMN,
        T = s.oX.LINE,
        _ = s.oC.HOUR,
        M = s.oC.DAY,
        N = s.oC.MONTH,
        w = s.C3.REACH_PERCENT,
        C = s.C3.SHARE;
      !(function (e) {
        (e.CHART = 'chart'),
          (e.INDEX = 'index'),
          (e.NUMERAL = 'numeral'),
          (e.TABLE = 'table'),
          (e.TEXT = 'text');
      })(i || (i = {}));
      var Z = i.CHART,
        D = i.NUMERAL,
        E = i.TABLE,
        I =
          ((r = {
            widget_test_overview: {
              label: '#3 Sport Channel Performance for 100% SPORT Owners',
              value: '3_channels_for_sports_owners',
              time: { '#lt': '2019-06-19', '#gte': '2019-06-10' },
              rows: [
                {
                  widgets: [
                    {
                      width: 12,
                      title: 'C1 Formule Abo - 100% Sport - Owners and Viewers',
                      series: [
                        {
                          query: {
                            audience: {
                              members: [14],
                              dimension: 'subscriber.c1_lib_formule_abonnement',
                              type: 'owners',
                            },
                          },
                          suffix: 'Owners',
                        },
                        {
                          query: {
                            filters: {
                              'campaign.agency': [
                                90,
                                'SPARK FOUNDRY IRELAND',
                                'Carat Scotland Limited',
                              ],
                              'content.genre': [2, 'Documentaries', 'Sports'],
                              'group.content.genre': [
                                2,
                                'Documentaries',
                                'Sports',
                              ],
                              'subscriber@c1_lib_formule_abonnement': [14],
                              'channel@id': [
                                'CANAL+ Sport',
                                'Equidia',
                                'Eurosport 1',
                                'Eurosport 2',
                                'Eurosport 360 1',
                                'Eurosport 360 2',
                                'Eurosport 360 3',
                                'Eurosport 360 4',
                                'Eurosport 360 5',
                                'Eurosport 360 6',
                                'Eurosport 360 7',
                                'Eurosport 360 8',
                                'Extreme Sports',
                                'Foot+ 24/24',
                                'Golf+',
                                'Infosport+',
                                'Ol TV',
                                'Onzeo',
                                'beIN Sports 1',
                                'beIN Sports 2',
                                'beIN Sports 3',
                                'beIN Sports Max 10',
                                'beIN Sports Max 4',
                                'beIN Sports Max 5',
                                'beIN Sports Max 6',
                                'beIN Sports Max 7',
                                'beIN Sports Max 8',
                                'beIN Sports Max 9',
                                'Multisports 1',
                                'Multisports 2',
                                'Multisports 3',
                                'Multisports 4',
                                'Multisports 5',
                                'Multisports 6',
                              ],
                            },
                            dimension: 'channel.id',
                            audience: {
                              members: [14],
                              dimension: 'subscriber.c1_lib_formule_abonnement',
                              historical: 'true',
                              type: ['WholeRange'],
                            },
                          },
                          suffix: 'Viewers',
                        },
                      ],
                      interval: 'month',
                      hasCustomQuery: !0,
                      customParameters: {
                        time: { range: 'Last 1 months' },
                        type: 'table',
                      },
                      height: 'auto',
                      customType: 'historical-meta-widget',
                    },
                  ],
                },
              ],
            } || {
              label: 'Single widget test overview',
              rows: [
                {
                  widgets: [
                    {
                      customType: 'combined-dimension-table',
                      series: [
                        {
                          query: {
                            dimension: l,
                            filters: { 'subscriber.region': [1] },
                          },
                        },
                        {
                          query: {
                            dimension: d,
                            filters: { 'subscriber.region': [2] },
                          },
                        },
                      ],
                      queryParameters: { limit: 3e3, sort: { value: w } },
                      title: 'Combined dimension table',
                      width: 12,
                    },
                  ],
                },
              ],
            },
            content_evaluation: {
              label: 'Content evaluation',
              rows: [
                {
                  widgets: [
                    { dimension: d, paging: !0, title: 'TOP Content', type: E },
                  ],
                },
              ],
            },
            sell_through_rate: {
              hideLabel: !0,
              label: 'Sell through rate',
              rows: [
                {
                  widgets: [
                    {
                      dimension: 'content.episode',
                      queryParameters: {},
                      customParameters: {
                        mainFilter: 'subscriber.o_barb_tv_regions',
                        metrics: ['reach', 'share'],
                      },
                      filters: [
                        { dimension: 'content.season', multiselect: !0 },
                        { dimension: 'content.episode', multiselect: !0 },
                      ],
                      filterContainer: '.sell-through-rate-filters',
                      interval: M,
                      title: 'Content Sell Through Rate',
                      customType: 'sell-through-rate',
                    },
                  ],
                },
              ],
            },
            custom_chart_widgets: {
              label: 'Custom chart widgets',
              rows: [
                {
                  widgets: [
                    {
                      customType: 'multi-query-table',
                      dimension: l,
                      queryParameters: { limit: 3e3 },
                      series: [
                        {
                          metric: w,
                          name: 'Reach % for Zagreb',
                          query: { filters: { 'subscriber.region': [1] } },
                        },
                        {
                          metric: C,
                          name: 'Share for Rijeka',
                          query: { filters: { 'subscriber.region': [2] } },
                        },
                      ],
                      title: 'Multi-query table',
                      width: 12,
                    },
                  ],
                },
              ],
            },
            content_provider_overview: {
              label: 'Content provider overview',
              rows: [
                {
                  widgets: [{ dimension: c, type: Z, title: 'TOP Providers' }],
                },
                {
                  widgets: [
                    {
                      dimension: m,
                      limit: 10,
                      type: Z,
                      title: 'TOP Genre',
                      width: 6,
                    },
                    {
                      dimension: p,
                      limit: 10,
                      type: Z,
                      title: 'TOP Subgenre',
                      width: 6,
                    },
                  ],
                },
                {
                  widgets: [
                    {
                      dimension: d,
                      limit: 10,
                      type: Z,
                      title: 'TOP Content',
                      width: 6,
                    },
                    {
                      dimension: f,
                      limit: 10,
                      type: Z,
                      title: 'TOP Modes',
                      width: 6,
                    },
                  ],
                },
                {
                  widgets: [
                    {
                      dimension: g,
                      limit: 10,
                      type: Z,
                      title: 'TOP Devices',
                      width: 6,
                    },
                    {
                      dimension: h,
                      limit: 10,
                      type: Z,
                      title: 'Video resolution',
                      width: 6,
                    },
                  ],
                },
              ],
            },
            package_overview: {
              label: 'Package overview',
              rows: [
                {
                  widgets: [
                    {
                      dimension: v,
                      chartType: T,
                      interval: M,
                      title: 'TOP packages daily performance',
                      type: Z,
                    },
                  ],
                },
                { widgets: [{ dimension: v, title: 'Top packages', type: Z }] },
                {
                  widgets: [
                    { dimension: g, title: 'Device', type: Z, width: 4 },
                    {
                      colors: ['#AC92EC'],
                      dimension: f,
                      title: 'Mode',
                      type: Z,
                      width: 4,
                    },
                    {
                      dimension: h,
                      title: 'Video resolution',
                      type: Z,
                      width: 4,
                    },
                  ],
                },
              ],
            },
            subscriber_overview: {
              label: 'Subscriber report',
              rows: [
                {
                  widgets: [
                    {
                      dimension: f,
                      metric: 'averageDuration',
                      title: 'Mode consumption by this subscriber',
                      type: Z,
                      width: 6,
                    },
                    {
                      dimension: f,
                      excludeFilter: !0,
                      metric: 'averageDuration',
                      title: 'Mode consumption by all subscribers',
                      type: Z,
                      width: 6,
                    },
                  ],
                },
                {
                  widgets: [
                    {
                      dimension: g,
                      metric: 'averageDuration',
                      title: 'Device type consumption by this subscriber',
                      type: Z,
                      width: 6,
                    },
                    {
                      dimension: g,
                      excludeFilter: !0,
                      metric: 'averageDuration',
                      title: 'Device type consumption by all subscribers',
                      type: Z,
                      width: 6,
                    },
                  ],
                },
                {
                  widgets: [
                    {
                      dimension: l,
                      interval: N,
                      metric: 'averageDuration',
                      queryParameters: {
                        all: !0,
                        filters: { 'channel.id': [-1] },
                      },
                      title: 'Monthly consumption by this subscriber',
                      type: Z,
                      width: 6,
                    },
                    {
                      dimension: l,
                      excludeFilter: !0,
                      interval: N,
                      metric: 'averageDuration',
                      queryParameters: {
                        all: !0,
                        filters: { 'channel.id': [-1] },
                      },
                      title: 'Monthly consumption by all subscribers',
                      type: Z,
                      width: 6,
                    },
                  ],
                },
                {
                  widgets: [
                    {
                      dimension: g,
                      interval: N,
                      metric: 'totalDuration',
                      title: 'Device type consumption',
                      type: Z,
                      width: 6,
                    },
                  ],
                },
                {
                  widgets: [
                    {
                      dimension: g,
                      interval: N,
                      metric: 'totalDuration',
                      title: 'Monthly device type consumption',
                      type: Z,
                    },
                  ],
                },
              ],
            },
            test_overview: {
              defaultMetric: '',
              label: 'Test overview (with custom date range)',
              time: { days: ['Mo'], range: 'Last 16 days' },
              rows: [
                {
                  widgets: [
                    {
                      dimension: f,
                      title: 'Fixed date range widget',
                      queryParameters: {
                        time: { $gte: '2016-01-01', $lt: '2016-01-02' },
                      },
                      type: Z,
                      width: 6,
                    },
                    {
                      dimension: f,
                      metric: 'averageDuration',
                      range: 'Last 5 months',
                      title:
                        'Fixed date range widget with predefined range and custom metric',
                      type: Z,
                      width: 6,
                    },
                  ],
                },
                {
                  widgets: [
                    {
                      dimension: g,
                      title: 'Normal widget (uses overview time)',
                      type: Z,
                      width: 6,
                    },
                    {
                      dimension: b,
                      limit: 10,
                      title:
                        '# This title has markdown and **It displays Regions**',
                      type: Z,
                      width: 6,
                    },
                  ],
                },
                {
                  widgets: [
                    {
                      text: '# This is a text widget **It displays random markdown**',
                      title: 'Text widget',
                      type: i.TEXT,
                      width: 6,
                    },
                    {
                      dimension: b,
                      limit: 10,
                      title: 'Regions',
                      type: 'chart',
                      width: 6,
                    },
                  ],
                },
                {
                  widgets: [
                    {
                      dimension: l,
                      queryParameters: {
                        all: !0,
                        filters: { 'channel.id': [-1] },
                      },
                      title:
                        '# This is a numeral widget for total performance of channels',
                      type: D,
                      showsLabelForNumeral: !0,
                      fontSize: '72px',
                      width: 6,
                    },
                    {
                      dimension: l,
                      queryParameters: { filters: { 'channel.id': [229] } },
                      title:
                        '# This is a numeral widget for total performance for HRT 1',
                      type: D,
                      showsLabelForNumeral: !0,
                      width: 6,
                    },
                  ],
                },
                {
                  widgets: [
                    {
                      dimension: l,
                      hasViews: !0,
                      limit: 10,
                      title: 'Channels with Views & Frequency chart',
                      type: Z,
                      width: 6,
                    },
                    {
                      dimension: l,
                      hasViews: !0,
                      limit: 10,
                      title: 'Channels with Views & Frequency table',
                      type: E,
                      width: 6,
                    },
                  ],
                },
              ],
            },
            showcase_overview: {
              defaultMetric: '',
              label: 'Showcase for comparison',
              rows: [
                {
                  widgets: [
                    {
                      dimension: l,
                      queryParameters: { filters: { 'channel.id': [229] } },
                      series: [{}, { range: 'true' }],
                      title: 'Last month (vs. month before that)',
                      type: D,
                      width: 6,
                    },
                    {
                      dimension: l,
                      queryParameters: { filters: { 'channel.id': [229] } },
                      series: [
                        { range: 'Last week' },
                        { range: 'Last week - 1w' },
                      ],
                      title: 'Last week (vs. week before that)',
                      type: D,
                      width: 6,
                    },
                  ],
                },
                {
                  widgets: [
                    {
                      dimension: l,
                      queryParameters: { filters: { 'channel.id': [229] } },
                      series: [
                        { range: 'Yesterday' },
                        { range: 'Yesterday - 1d' },
                      ],
                      title: 'Yesterday (vs. day before that)',
                      type: D,
                      width: 6,
                    },
                    {
                      dimension: l,
                      queryParameters: { filters: { 'channel.id': [229] } },
                      series: [
                        { range: 'Yesterday' },
                        { range: 'Yesterday - 7d' },
                      ],
                      title: 'Yesterday (vs. 7 days before that)',
                      type: D,
                      width: 6,
                    },
                  ],
                },
                {
                  widgets: [
                    {
                      colors: ['#4FC1E9', '#AC92EC'],
                      dimension: f,
                      interval: M,
                      queryParameters: { filters: { 'action.mode': [1] } },
                      series: [
                        {
                          name: 'Linear - week before last',
                          range: 'Last week - 1w',
                        },
                        { name: 'Linear - last week', range: 'Last week' },
                      ],
                      title:
                        'Comparing mode **Linear**, **Last week** vs. **Week before that**',
                      type: Z,
                      width: 6,
                    },
                    {
                      colors: ['#4FC1E9', '#AC92EC'],
                      dimension: f,
                      interval: s.oC.WEEK,
                      queryParameters: { filters: { 'action.mode': [1] } },
                      series: [
                        {
                          name: 'Linear - month before last',
                          range: 'Last month - 1M',
                        },
                        { name: 'Linear - last month', range: 'Last month' },
                      ],
                      title:
                        'Comparing mode **Linear**, **Last month** vs. **Month before that**',
                      type: Z,
                      width: 6,
                    },
                  ],
                },
                {
                  widgets: [
                    {
                      colors: ['#4FC1E9', '#AC92EC'],
                      dimension: f,
                      interval: s.oC.MONTH,
                      queryParameters: { filters: { 'action.mode': [1] } },
                      series: [
                        {
                          name: "Linear - Q1 '15",
                          range: 'true',
                          query: {
                            time: { $gte: '2015-01-01', $lt: '2015-03-31' },
                          },
                        },
                        {
                          name: "Linear - Q1 '16",
                          range: 'true',
                          query: {
                            time: { $gte: '2016-01-01', $lt: '2016-03-31' },
                          },
                        },
                      ],
                      title:
                        'Comparing mode **Linear**, Q1 comparison 2015 vs. 2016 by **Month**',
                      type: Z,
                      width: 6,
                    },
                  ],
                },
              ],
            },
          }),
          (0, a.Z)(r, l, {
            rows: [
              {
                widgets: [
                  {
                    dimension: l,
                    highlightMember: !0,
                    title: 'Competitor performance',
                    type: Z,
                  },
                ],
              },
              {
                widgets: [
                  {
                    chartType: T,
                    colors: ['#ED5565'],
                    dimension: l,
                    interval: _,
                    title: '{memberLabel} trend',
                    type: Z,
                  },
                ],
              },
              {
                widgets: [
                  { dimension: d, limit: 10, title: 'TOP Content', type: E },
                ],
              },
              {
                widgets: [
                  { dimension: g, title: 'Device', type: Z, width: 4 },
                  {
                    chartType: y,
                    colors: ['#FC6E51'],
                    dimension: f,
                    title: 'Mode',
                    type: Z,
                    width: 4,
                  },
                  {
                    dimension: h,
                    title: 'Video resolution',
                    type: Z,
                    width: 4,
                  },
                ],
              },
              {
                widgets: [
                  {
                    dimension: v,
                    limit: 10,
                    title: 'Packages',
                    type: Z,
                    width: 6,
                  },
                  {
                    dimension: b,
                    limit: 10,
                    title: 'Region',
                    type: Z,
                    width: 6,
                  },
                ],
              },
            ],
          }),
          (0, a.Z)(r, u, {
            rows: [
              {
                widgets: [
                  { dimension: l, title: 'Competitor performance', type: Z },
                ],
              },
              {
                widgets: [
                  {
                    dimension: l,
                    title: '<%= dimensionLabel %> trend',
                    type: Z,
                  },
                ],
              },
              {
                widgets: [
                  { dimension: m, title: 'TOP Genre', type: E, width: 6 },
                  { dimension: f, title: 'Mode', type: Z, width: 6 },
                ],
              },
              {
                widgets: [
                  { dimension: g, title: 'Device', type: Z, width: 6 },
                  { dimension: b, title: 'Region', type: Z, width: 6 },
                ],
              },
            ],
          }),
          (0, a.Z)(r, c, {
            rows: [
              {
                widgets: [
                  { dimension: c, title: 'Competitor performance', type: Z },
                ],
              },
              {
                widgets: [
                  {
                    dimension: l,
                    title: 'TOP Channels of <%= dimensionLabel %>',
                    type: Z,
                  },
                ],
              },
              {
                widgets: [
                  {
                    dimension: m,
                    limit: 10,
                    title: 'TOP Genre',
                    type: E,
                    width: 6,
                  },
                  {
                    dimension: p,
                    limit: 10,
                    title: 'TOP Subgenre',
                    type: E,
                    width: 6,
                  },
                ],
              },
              {
                widgets: [
                  { dimension: d, limit: 10, title: 'TOP Content', type: E },
                ],
              },
              {
                widgets: [
                  { dimension: g, title: 'Device', type: Z, width: 4 },
                  { dimension: f, title: 'Mode', type: Z, width: 4 },
                  {
                    dimension: h,
                    title: 'Video resolution',
                    type: Z,
                    width: 4,
                  },
                ],
              },
            ],
          }),
          (0, a.Z)(r, d, {
            rows: [
              {
                widgets: [
                  {
                    dimension: d,
                    interval: _,
                    title: 'TOP emissions',
                    type: Z,
                  },
                ],
              },
              {
                widgets: [
                  {
                    dimension: d,
                    interval: _,
                    title: 'TOP emissions',
                    type: E,
                  },
                ],
              },
              {
                widgets: [
                  { dimension: g, title: 'Device', type: Z, width: 6 },
                  {
                    colors: ['#AC92EC'],
                    dimension: f,
                    title: 'Mode',
                    type: Z,
                    width: 6,
                  },
                ],
              },
              {
                widgets: [
                  {
                    dimension: b,
                    limit: 10,
                    title: 'Region',
                    type: Z,
                    width: 6,
                  },
                  {
                    dimension: v,
                    limit: 10,
                    title: 'Packages',
                    type: Z,
                    width: 6,
                  },
                ],
              },
            ],
          }),
          (0, a.Z)(r, v, {
            rows: [
              {
                widgets: [
                  {
                    dimension: v,
                    highlightMember: !0,
                    title: 'Competitor performance',
                    type: Z,
                  },
                ],
              },
              {
                widgets: [
                  { dimension: g, title: 'Device', type: Z, width: 4 },
                  {
                    colors: ['#FFCE54'],
                    dimension: f,
                    title: 'Mode',
                    type: Z,
                    width: 4,
                  },
                  {
                    dimension: h,
                    title: 'Video resolution',
                    type: Z,
                    width: 4,
                  },
                ],
              },
            ],
          }),
          {
            ADKIND: 'ad.ad_kind',
            AUDIENCE: 'target.audience',
            CAMPAIGN: 'campaign.id',
            DEVICE_PROPOSITION: 'device.proposition',
            CHANNEL_PROVIDERS: 'channel.provider',
            CHANNEL: 'channel.id',
            CHANNEL_GROUP: 'channel.group',
            CONTENT: 'content.id',
            CONTENT_VOD: 'vodcontent.id',
            CONTENT_GENRE: 'content.genre',
            CONTENT_TYPE: 'content.type',
            CONTENT_SERIES: 'content.series',
            COUNTRIES: 'subscriber.country',
            DAYPART: 'daypart.id',
            DEVICE: 'device.type',
            DURATION: 'action.duration',
            EMISSION: 'emission.id',
            EPISODE: 'content.episode_num',
            FREEWHEEL_AUDIENCE: 'subscriber.o_audience',
            INTERVAL: 'time.interval',
            MODE: 'action.mode',
            PACKAGE: 'subscriber.package',
            PLATFORM: 'vod.provider',
            REGION: 'subscriber.region',
            RESOLUTION: 'video.resolution',
            SEASON: 'content.season_num',
            SUBSCRIBERS_IMPORT: 'subscribers.import',
            PLACEMENT: 'placement.id',
          }),
        O = {
          LOCALIZED_DATE_TINY: 'P',
          LOCALIZED_DATE_SHORT: 'PP',
          LOCALIZED_DATE_MIDDLE: 'PPP',
          LOCALIZED_DATE_LONG: 'PPPP',
          LOCALIZED_TIME_SHORT: 'p',
          ISO_SHORT: 'yyyy-MM-dd',
          ISO_LONG: "yyyy-MM-dd'T'HH:mm:ssXXX",
          SERVER_SHORT_FORMAT: 'yyyyMMdd',
          LONG_MONTH: 'LLLL',
          LONG_DAY: 'EEEE',
          LONG_YEAR: 'yyyy',
          DATE: 'dd',
          SHORT_MONTH_DATE: 'LLL dd',
          UTC_TIME_ZONE: 'Etc/GMT',
        };
    },
    61873: function (e, t, n) {
      'use strict';
      n.d(t, {
        Pn: function () {
          return Ce;
        },
        hT: function () {
          return r;
        },
        kT: function () {
          return l;
        },
        uf: function () {
          return Oe;
        },
        ej: function () {
          return s;
        },
        MX: function () {
          return Le;
        },
        Lf: function () {
          return ye;
        },
        Du: function () {
          return Ne;
        },
        Qk: function () {
          return Me;
        },
        bE: function () {
          return _e;
        },
        rx: function () {
          return se;
        },
        r$: function () {
          return we;
        },
        $4: function () {
          return Te;
        },
        qs: function () {
          return ue();
        },
        lI: function () {
          return Ze;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          add: function () {
            return d.Z;
          },
          addMonths: function () {
            return G.Z;
          },
          addWeeks: function () {
            return U.Z;
          },
          closestTo: function () {
            return H.Z;
          },
          differenceInCalendarWeeks: function () {
            return ae;
          },
          differenceInDays: function () {
            return j.Z;
          },
          endOfDay: function () {
            return x.Z;
          },
          endOfISOWeek: function () {
            return E.Z;
          },
          endOfMonth: function () {
            return O.Z;
          },
          endOfQuarter: function () {
            return k.Z;
          },
          endOfWeek: function () {
            return oe;
          },
          endOfYear: function () {
            return A.Z;
          },
          format: function () {
            return K;
          },
          fromUnixTime: function () {
            return y.Z;
          },
          getDatasetDate: function () {
            return te;
          },
          getDatasetWeekStart: function () {
            return $;
          },
          getUTCDate: function () {
            return re;
          },
          getUTCTimeStamp: function () {
            return ne;
          },
          getUnixTime: function () {
            return b.Z;
          },
          getWeek: function () {
            return ee;
          },
          getYear: function () {
            return T.Z;
          },
          isAfter: function () {
            return w.Z;
          },
          isBefore: function () {
            return C.Z;
          },
          isEqual: function () {
            return F.Z;
          },
          isSameDay: function () {
            return _.Z;
          },
          isSameMonth: function () {
            return R.Z;
          },
          isSameYear: function () {
            return z.Z;
          },
          isToday: function () {
            return W.Z;
          },
          isValid: function () {
            return N.Z;
          },
          localeEnUs: function () {
            return v.Z;
          },
          parseISO: function () {
            return h.Z;
          },
          startOfDay: function () {
            return P.Z;
          },
          startOfHour: function () {
            return Z.Z;
          },
          startOfISOWeek: function () {
            return D.Z;
          },
          startOfMonth: function () {
            return I.Z;
          },
          startOfQuarter: function () {
            return S.Z;
          },
          startOfTomorrow: function () {
            return B.Z;
          },
          startOfWeek: function () {
            return ie;
          },
          startOfYear: function () {
            return L.Z;
          },
          sub: function () {
            return M.Z;
          },
          subMonths: function () {
            return V.Z;
          },
          subWeeks: function () {
            return Y.Z;
          },
        });
      var i = n(4942);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var s = function (e) {
          var t,
            n,
            r,
            i,
            o =
              null === (t = window) ||
              void 0 === t ||
              null === (n = t.document) ||
              void 0 === n ||
              null === (r = n.cookie) ||
              void 0 === r ||
              null === (i = r.match) ||
              void 0 === i
                ? void 0
                : i.call(
                    r,
                    new RegExp(
                      '(?:^|; )' +
                        e.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') +
                        '=([^;]*)'
                    )
                  );
          return o ? decodeURIComponent(o[1]) : void 0;
        },
        l = function (e) {
          !(function (e, t) {
            var n = a(
              { path: '/' },
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
            );
            n.expires instanceof Date && (n.expires = n.expires.toUTCString());
            var r = encodeURIComponent(e) + '=' + encodeURIComponent(t);
            for (var i in n) {
              r += '; ' + i;
              var o = n[i];
              o && (r += '=' + o);
            }
            document.cookie = r;
          })(e, '', { 'max-age': -1 });
        },
        u = (window.localStorage, n(18202)),
        c = n(67200),
        d = n(29422),
        m = n(584),
        p = n(67090),
        g = n(52724),
        f = n(87598),
        v = n(4958),
        h = n(23855),
        b = n(42902),
        y = n(42227),
        T = n(95570),
        _ = n(3151),
        M = n(52085),
        N = n(49599),
        w = n(42699),
        C = n(313),
        Z = n(12383),
        D = n(86573),
        E = n(95222),
        I = n(43703),
        O = n(4135),
        L = n(38148),
        A = n(10876),
        S = n(94431),
        k = n(38358),
        j = n(94673),
        P = n(69119),
        x = n(83894),
        R = n(49160),
        z = n(60792),
        F = n(96843),
        U = n(63500),
        G = n(11640),
        Y = n(77982),
        V = n(54559),
        W = n(51085),
        H = n(95753),
        B = n(60716);
      function q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var J = function () {
          return window.TVBEAT_SETTINGS.timeZone;
        },
        X = function () {
          return window.TVBEAT_SETTINGS.dateLocaleFromLib;
        },
        $ = function () {
          return window.TVBEAT_SETTINGS.weekStart;
        },
        K = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : f.Hu.LOCALIZED_DATE_SHORT,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return (0, u.Z)(
            e,
            t,
            Q({ timeZone: J(), locale: X(), weekStartsOn: $() }, n)
          );
        },
        ee = function (e, t) {
          return (0, c.Z)(e, Q({ locale: X(), weekStartsOn: $() }, t));
        },
        te = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : new Date();
          return new Date(
            (e || new Date()).toLocaleString('en-US', { timeZone: J() })
          );
        },
        ne = function (e) {
          return Date.UTC(
            e.getFullYear(),
            e.getMonth(),
            e.getDate(),
            e.getHours(),
            e.getMinutes(),
            e.getSeconds(),
            e.getMilliseconds()
          );
        },
        re = function (e) {
          return (0, d.Z)(e, { minutes: e.getTimezoneOffset() });
        },
        ie = function (e, t) {
          return (0, m.Z)(e, Q({ locale: X(), weekStartsOn: $() }, t));
        },
        oe = function (e, t) {
          return (0, p.Z)(e, Q({ locale: X(), weekStartsOn: $() }, t));
        },
        ae = function (e, t, n) {
          return (0, g.Z)(e, t, Q({ locale: X(), weekStartsOn: $() }, n));
        },
        se =
          (n(81763),
          n(8686),
          function (e, t, n) {
            if (e) {
              if (!t || F.Z(P.Z(e), P.Z(t))) return K(e);
              var r = K(e, n),
                i = K(t, n);
              return ''.concat(r, ' - ').concat(i);
            }
          }),
        le = n(80129),
        ue = n.n(le),
        ce = n(63105),
        de = n.n(ce),
        me = n(35161),
        pe = n.n(me),
        ge = n(89734),
        fe = n.n(ge);
      function ve(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ve(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ve(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var be = f.ZP.MODE_OFF_VALUE,
        ye = function (e) {
          var t = e.channels,
            n = void 0 === t ? [] : t,
            r = e.userGroupSettings,
            i = r.channels || [];
          return r.showAllChannels
            ? n
            : n.filter(function (e) {
                return 'number' == typeof e.value && i.includes(e.value);
              });
        },
        Te = function (e, t) {
          return 'alphabetically' === e
            ? fe()(t, 'label')
            : 'numerically' === e
            ? fe()(t, function (e) {
                var t = e.label;
                return parseFloat(t);
              })
            : t;
        },
        _e = function (e, t, n) {
          var r = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = JSON.stringify(e),
                n = { '@': '.', '#gte': '$gte', '#lt': '$lt' };
              return (
                (t = t.replace(/@|#gte|#lt/g, function (e) {
                  return n[e];
                })),
                JSON.parse(t)
              );
            })(e.naValues),
            i = r[t];
          if (!i) return n;
          var o = i.hidden,
            a = i.label;
          return o
            ? de()(n, function (e) {
                return 'N/A' !== e.label;
              })
            : a
            ? pe()(n, function (e) {
                return 'N/A' === e.label ? he(he({}, e), {}, { label: a }) : e;
              })
            : n;
        },
        Me = function (e) {
          return pe()(e, function (e) {
            return he(
              he({}, e),
              {},
              { label: (e.label || '').replace(/(,)\S/g, ', ') }
            );
          });
        },
        Ne = function (e) {
          return de()(e, function (e) {
            return e.value !== be;
          });
        },
        we = function (e) {
          return de()(e, function (e) {
            return 'NA' !== e.label;
          });
        },
        Ce =
          (n(24350),
          function (e, t) {
            return e.reduce(function (e, n) {
              return (e[t ? n[t] : n] = n), e;
            }, {});
          });
      n(13311), n(45578), n(41609);
      var Ze = function (e, t, n) {
        var r = t.reduce(function (t, r) {
            var i = e.find(function (e) {
              return e[n] === r;
            });
            return i && t.push(i), t;
          }, []),
          i = e.filter(function (e) {
            return !t.includes(e.value);
          });
        return r.concat(i);
      };
      function De(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? De(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : De(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Ie = 'en-US',
        Oe = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : window.TVBEAT_SETTINGS.numberLocale,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = Ee(
              {
                notation: 'compact',
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              },
              n
            ),
            i = 'string' == typeof e ? parseFloat(e) : e;
          if (('number' != typeof i && !i) || Number.isNaN(i)) return '';
          try {
            return i.toLocaleString(t, r);
          } catch (e) {
            return i.toLocaleString(Ie, r);
          }
        },
        Le =
          (n(93162),
          function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : document.documentElement;
            return window.getComputedStyle(t).getPropertyValue(e).trim();
          });
    },
    86485: function (e, t, n) {
      'use strict';
      n.d(t, {
        Zu: function () {
          return H;
        },
        t$: function () {
          return x;
        },
        $G: function () {
          return r.$;
        },
      });
      var r = n(26793),
        i = n(87757),
        o = n.n(i),
        a = (n(4485), n(67294)),
        s = n(4942),
        l = n(9669),
        u = n.n(l),
        c = n(87598),
        d = n(61873),
        m = (0, d.ej)(c.ZP.LOGIN_TOKEN_NAME);
      var p = u().create({
        paramsSerializer: function (e) {
          return d.qs.stringify(e, { encode: !1 });
        },
        headers: { Authorization: 'Bearer '.concat(m) },
      });
      p.interceptors.response.use(
        function (e) {
          return e;
        },
        function (e) {
          var t;
          return (
            401 ===
              (null !== (t = null == e ? void 0 : e.response) && void 0 !== t
                ? t
                : {}
              ).status && ((0, d.kT)(c.ZP.LOGIN_TOKEN_NAME), console.log('1')),
            Promise.reject(e)
          );
        }
      );
      var g,
        f,
        v = {
          getUser: function () {
            return p.get('/api/users/me');
          },
          updateGroups: function (e) {
            return p.put('/api/users/me/groups', e);
          },
          updateMetaGroups: function (e) {
            return p.put('/api/users/me/meta-groups', e);
          },
          updateProperty: function (e) {
            return p.put('/api/users/me/property', e);
          },
          getUserGroupSettings: function (e) {
            var t = e.userGroupId,
              n = e.datasetValue;
            return p.get('/api/user-groups/'.concat(t, '/settings/').concat(n));
          },
        },
        h = n(15861),
        b = n(57557),
        y = n.n(b),
        T = n(82729),
        _ = n.n(T),
        M = n(89734),
        N = n.n(M),
        w = c.ZP.ALL_VALUE,
        C = function (e, t) {
          var n = e.dataset,
            r = e.datasetDetails.dimensions,
            i = e.props.dimension,
            o = (0, d.bE)(n, i, t);
          i === c.m$.CHANNEL
            ? (o = (function (e) {
                var t = N()(
                    e.filter(function (e) {
                      return 'NA' !== e.label;
                    }),
                    'label'
                  ),
                  n = _()(t, { value: w })[0];
                return n && ((n.label = 'All'), t.unshift(n)), t;
              })(t))
            : i === c.m$.MODE
            ? (o = (0, d.Du)(o))
            : i === c.m$.PACKAGE
            ? (o = (0, d.Qk)(o))
            : i === c.m$.REGION && (o = (0, d.r$)(o));
          var a = (
            r.find(function (e) {
              return e.value === i;
            }) || {}
          ).sort;
          return (0, d.$4)(a, o);
        },
        Z = function (e, t) {
          var n = e.dataset;
          return e.props.dimension === c.m$.CHANNEL
            ? (0, d.Lf)({ channels: t, userGroupSettings: n })
            : t;
        },
        D = {
          getDataset: function (e) {
            return p.get('/api/datasets/'.concat(e));
          },
          getDatasetConfiguration: function (e) {
            return p.get('/api/datasets/'.concat(e, '/configuration'));
          },
          getDatasetGeneration: function (e) {
            return p.get('/api/datasets/'.concat(e, '/generation'));
          },
          getDimensionValues:
            ((g = (0, h.Z)(
              o().mark(function e(t) {
                var n, r;
                return o().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            p.get(
                              '/api/datasets/'
                                .concat(t.dataset.dataset.value, '/dimensions/')
                                .concat(t.props.dimension, '/values'),
                              {
                                params: y()(t.props, ['dimension']),
                                paramsSerializer: function (e) {
                                  return d.qs.stringify(e, {
                                    encode: !1,
                                    arrayFormat: 'repeat',
                                  });
                                },
                              }
                            )
                          );
                        case 3:
                          if (!(n = e.sent).data.error) {
                            e.next = 6;
                            break;
                          }
                          throw new Error(n.data.error);
                        case 6:
                          return (
                            (r = C(t, n.data)), e.abrupt('return', Z(t, r))
                          );
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(0)),
                            console.error('ERROR: getDimensionValues', e.t0);
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            )),
            function (e) {
              return g.apply(this, arguments);
            }),
          getDatasetMeta: function (e, t) {
            return p.get(
              '/api/datasets/'
                .concat(e, '/entities/')
                .concat(t, '/meta-properties')
            );
          },
          getResearch: function (e, t) {
            return p.post('/api/datasets/'.concat(e, '/data'), t);
          },
          getAudienceSize: function (e, t) {
            var n = e.userGroupSettings;
            return p.post('/api/datasets/'.concat(n.dataset.value, '/data'), t);
          },
          exportData: function (e, t) {
            return p.post('/api/datasets/'.concat(e, '/export_data'), t);
          },
          exportPage: function (e, t) {
            var n = t.url,
              r = t.format;
            return p.post(
              '/api/datasets/'.concat(e, '/export_page'),
              { path: n.replace(''.concat(e, '/'), ''), format: r },
              { responseType: 'arraybuffer' }
            );
          },
        },
        E = {
          getVersions: function (e) {
            return p.get('/api/forecasting/'.concat(e, '/versions'));
          },
          getAlterations: function (e, t) {
            return p.get(
              '/api/forecasting/'.concat(e, '/').concat(t, '/alterations')
            );
          },
          getParams:
            ((f = (0, h.Z)(
              o().mark(function e(t, n) {
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          'return',
                          p.get(
                            '/api/forecasting/'
                              .concat(t, '/')
                              .concat(n, '/params')
                          )
                        );
                      case 1:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e, t) {
              return f.apply(this, arguments);
            }),
          updateParams: function (e, t, n) {
            return p.post(
              '/api/forecasting/'.concat(e, '/').concat(t, '/params'),
              n
            );
          },
          getForecastedDimensions: function (e) {
            return p.get('/api/forecasting/'.concat(e, '/dimensions'));
          },
          getTotals: function (e, t) {
            return p.get(
              '/api/forecasting/'.concat(e, '/').concat(t, '/totals')
            );
          },
          recalculateForecast: function (e, t) {
            return p.post(
              '/api/forecasting/'
                .concat(e, '/version/')
                .concat(t, '/recalculate')
            );
          },
          deleteAlteration: function (e, t, n) {
            return p.delete(
              '/api/forecasting/'
                .concat(e, '/version/')
                .concat(t, '/alteration/')
                .concat(n)
            );
          },
          updateAlteration: function (e, t, n, r) {
            return p.patch(
              '/api/forecasting/'
                .concat(e, '/version/')
                .concat(t, '/alteration/')
                .concat(n),
              r
            );
          },
          addAlteration: function (e, t, n) {
            return p.post(
              '/api/forecasting/'
                .concat(e, '/version/')
                .concat(t, '/alteration'),
              n
            );
          },
          setMasterVersion: function (e, t) {
            return p.patch('/api/forecasting/'.concat(e, '/versions'), t);
          },
          renameVersion: function (e, t, n) {
            return p.patch(
              '/api/forecasting/'.concat(e, '/version/').concat(t),
              n
            );
          },
          createVersion: function (e, t) {
            return p.post('/api/forecasting/'.concat(e, '/version'), t);
          },
          deleteVersion: function (e, t) {
            return p.delete(
              '/api/forecasting/'.concat(e, '/version/').concat(t)
            );
          },
          getReport: function (e, t) {
            return p.get(
              '/api/forecasting/'.concat(e, '/version/').concat(t, '/report')
            );
          },
        },
        I = n(70885);
      function O(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var A = {
          getCampaigns: function (e, t) {
            return p.get('/api/campaigns/'.concat(e, '/campaign_data'), {
              params: t,
            });
          },
          getCampaignInfo: function (e, t) {
            return p.get('/api/campaigns/'.concat(e, '/campaign/').concat(t));
          },
          getPlacements: function (e, t) {
            return p.post(
              '/api/campaigns/'.concat(e, '/placement_data'),
              L(
                L({}, t),
                {},
                {
                  filters: (function () {
                    var e = t.filters;
                    if (e)
                      return Object.entries(e).reduce(function (e, t) {
                        var n = (0, I.Z)(t, 2),
                          r = n[0],
                          i = n[1];
                        return (e[r] = i.split(',')), e;
                      }, {});
                  })(),
                }
              )
            );
          },
          getCreatives: function (e, t) {
            return p.get('/api/campaigns/'.concat(e, '/creative_data'), {
              params: t,
            });
          },
        },
        S = {
          getAppsConfig: function () {
            return p.get('/apps/config');
          },
          getAppsDimensions: function () {
            return p.get('/apps/dimensions');
          },
          getAppData: function (e) {
            return p.post('/apps/data', e);
          },
        },
        k = {
          getAudience: function (e) {
            return p.get('/api/segments', { params: { dataset: e.dataset } });
          },
        };
      function j(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      P(P(P(P(P(P({}, v), D), E), A), S), k);
      n(68630);
      var x = function (e, t) {
        var n = (0, a.useCallback)(
          function (n) {
            Array.isArray(e)
              ? e.some(function (e) {
                  return !e.current || e.current.contains(n.target);
                }) || t(n)
              : e.current && !e.current.contains(n.target) && t(n);
          },
          [t, e]
        );
        (0, a.useEffect)(
          function () {
            var e = 'mousedown';
            return (
              document.addEventListener(e, n),
              function () {
                document.removeEventListener(e, n);
              }
            );
          },
          [e, n]
        );
      };
      n(44908),
        n(45578),
        n(8686),
        n(63105),
        n(84486),
        n(64721),
        n(3674),
        n(35161),
        n(84238);
      c.ZP.ALL_VALUE,
        c.m$.CHANNEL,
        c.m$.MODE,
        c.m$.PACKAGE,
        c.m$.REGION,
        c.m$.DAYPART,
        c.m$.CONTENT_TYPE,
        c.m$.CONTENT_VOD;
      c.m$.CAMPAIGN, c.m$.CHANNEL, c.m$.CONTENT, c.m$.PLACEMENT, n(92667);
      var R = n(22928),
        z = n(94184),
        F = n.n(z),
        U = 'ProgressBar_progressBar__3sZ0m',
        G = 'ProgressBar_progressBarTime__3FGd4',
        Y = 'ProgressBar_progressBarProgress__3JRbI',
        V = 'ProgressBar_isBorderRadius__3tO4N',
        W = (0, a.forwardRef)(function (e, t) {
          var n = e.progress,
            r = e.time,
            i = (0, a.useMemo)(
              function () {
                return {
                  timeStyles: { width: ''.concat(r, '%') },
                  progressStyles: { width: ''.concat(n, '%') },
                };
              },
              [n, r]
            ),
            o = i.timeStyles,
            l = i.progressStyles;
          return (0,
          R.Z)(a.Fragment, {}, void 0, a.createElement('div', { ref: t, className: U }, (0, R.Z)('div', { className: G, style: o }), (0, R.Z)('div', { className: F()(Y, (0, s.Z)({}, V, n < 100)), style: l })), ' ', l.width);
        });
      W.displayName = 'ProgressBar';
      var H = function (e) {
        var t = (0, a.useCallback)(
          function (t) {
            'Escape' === t.code && (null == e || e());
          },
          [e]
        );
        (0, a.useEffect)(
          function () {
            return (
              window.addEventListener('keydown', t),
              function () {
                window.removeEventListener('keydown', t);
              }
            );
          },
          [t]
        );
      };
    },
    62596: function (e, t, n) {
      'use strict';
      var r = n(9216);
      n(22346), n(26071);
      t.Z = r.Z;
    },
    8686: function (e, t, n) {
      'use strict';
      var r, i, o, a, s, l, u, c, d, m, p, g, f;
      n.d(t, {
        oX: function () {
          return r;
        },
        Db: function () {
          return c;
        },
        oC: function () {
          return g;
        },
        C3: function () {
          return d;
        },
      }),
        (function (e) {
          (e.LINE = 'line'), (e.COLUMN = 'column'), (e.PIE = 'pie');
        })(r || (r = {})),
        (function (e) {
          (e.Event = 'Event'), (e.EPG = 'EPG');
        })(i || (i = {})),
        (function (e) {
          (e.Platform = 'platform'), (e.Country = 'country');
        })(o || (o = {})),
        (function (e) {
          (e.Master = 'Master'), (e.Admin = 'Admin');
        })(a || (a = {})),
        (function (e) {
          (e.Minutes = 'minute'), (e.Hours = 'hour');
        })(s || (s = {})),
        (function (e) {
          (e.ALL = 'all'), (e.VALUES = 'values'), (e.GROUPS = 'groups');
        })(l || (l = {})),
        (function (e) {
          (e.Build = 'build'), (e.Import = 'import');
        })(u || (u = {})),
        (function (e) {
          (e.ADKIND = 'ad.ad_kind'),
            (e.AUDIENCE = 'target.audience'),
            (e.CAMPAIGN = 'campaign.id'),
            (e.DEVICE_PROPOSITION = 'device.proposition'),
            (e.CHANNEL_PROVIDERS = 'channel.provider'),
            (e.CHANNEL = 'channel.id'),
            (e.CHANNEL_GROUP = 'channel.group'),
            (e.CONTENT = 'content.id'),
            (e.CONTENT_VOD = 'vodcontent.id'),
            (e.CONTENT_GENRE = 'content.genre'),
            (e.CONTENT_SUBGENRE = 'content.subgenre'),
            (e.CONTENT_TYPE = 'content.type'),
            (e.CONTENT_SERIES = 'content.series'),
            (e.COUNTRIES = 'subscriber.country'),
            (e.DAYPART = 'daypart.id'),
            (e.DEVICE = 'device.type'),
            (e.DURATION = 'action.duration'),
            (e.EMISSION = 'emission.id'),
            (e.EPISODE = 'content.episode_num'),
            (e.FREEWHEEL_AUDIENCE = 'subscriber.o_audience'),
            (e.INTERVAL = 'time.interval'),
            (e.MODE = 'action.mode'),
            (e.PACKAGE = 'subscriber.package'),
            (e.PLATFORM = 'vod.provider'),
            (e.REGION = 'subscriber.region'),
            (e.RESOLUTION = 'video.resolution'),
            (e.SEASON = 'content.season_num'),
            (e.SUBSCRIBERS_IMPORT = 'subscribers.import'),
            (e.PLACEMENT = 'placement.id'),
            (e.CAMPAIGN_TYPE = 'ad.campaign_type'),
            (e.AD_TYPE = 'ad.adtype');
        })(c || (c = {})),
        (function (e) {
          (e.AVERAGE_DURATION = 'averageDuration'),
            (e.AVERAGE_DURATION_ALL = 'avgDurAll'),
            (e.RATING = 'rating'),
            (e.RATING_PERCENT = 'ratingPercent'),
            (e.REACH = 'reach'),
            (e.DREACH = 'dreach'),
            (e.SHARE = 'share'),
            (e.REACH_PERCENT = 'reachPercent'),
            (e.TOTAL_DURATION = 'totalDuration'),
            (e.INCREMENTAL_REACH = 'ireach'),
            (e.INCREMENTAL_REACH_PERCENT = 'ireachPercent'),
            (e.STREAM = 'stream'),
            (e.FREQ = 'freq'),
            (e.REACH_CUMUL = 'reachCumul'),
            (e.REACH_PERCENT_CUMUL = 'reachPercentCumul'),
            (e.TOTAL_DURATION_CUMUL = 'totalDurationCumul'),
            (e.RATING_CUMUL = 'ratingCumul'),
            (e.RATING_PERCENT_CUMUL = 'ratingPercentCumul'),
            (e.SHARE_CUMUL = 'shareCumul'),
            (e.AVERAGE_DURATION_CUMUL = 'averageDurationCumul'),
            (e.AVERAGE_DURATION_ALL_CUMUL = 'avgDurAllCumul'),
            (e.STREAM_CUMUL = 'streamCumul'),
            (e.SHARE_ON_CONTENT = 'shareOnContent'),
            (e.RATING_ON_CONTENT = 'ratingOnContent'),
            (e.FREQ_CUMUL = 'freqCumul');
        })(d || (d = {})),
        (function (e) {
          (e.IMPRESSION = 'impression'),
            (e.IMPRESSION_PERCENT = 'impressionPercent'),
            (e.INCREMENTAL_REACH = 'ireach'),
            (e.INCREMENTAL_REACH_PERCENT = 'ireachPercent'),
            (e.FREQUENCY = 'frequency'),
            (e.FREQUENCY_CUMUL = 'frequencyCumul'),
            (e.IMPRESSION_CUMUL = 'impressionCumul'),
            (e.IMPRESSION_PERCENT_CUMUL = 'impressionPercentCumul'),
            (e.SHARE_ON_CONTENT = 'shareOnContent'),
            (e.RATING_ON_CONTENT = 'ratingOnContent'),
            (e.REACH_CUMUL = 'reachCumul'),
            (e.REACH_PERCENT_CUMUL = 'reachPercentCumul'),
            (e.MOC = 'moc'),
            (e.MOC_PERCENT = 'mocPercent'),
            (e.MOP = 'mop'),
            (e.MOP_PERCENT = 'mopPercent'),
            (e.MOS = 'mos'),
            (e.MOS_PERCENT = 'mosPercent'),
            (e.MOT = 'mot'),
            (e.PC = 'pc'),
            (e.PC_PERCENT = 'pcPercent'),
            (e.PP = 'pp'),
            (e.PP_PERCENT = 'ppPercent'),
            (e.PT = 'pt'),
            (e.PT_PERCENT = 'ptPercent'),
            (e.PS = 'ps'),
            (e.PS_PERCENT = 'psPercent'),
            (e.MOLEFTADT = 'moleftadt'),
            (e.MOLEFTADC = 'moleftadc'),
            (e.MOLEFTADC_PERCENT = 'moleftadcPercent'),
            (e.MOLEFTADP = 'moleftadp'),
            (e.MOLEFTADP_PERCENT = 'moleftadpPercent'),
            (e.MOLEFTADS = 'moleftads'),
            (e.MOLEFTADS_PERCENT = 'moleftadsPercent'),
            (e.MONOADT = 'monoadt'),
            (e.MONOADC = 'monoadc'),
            (e.MONOADC_PERCENT = 'monoadcPercent'),
            (e.MONOADP = 'monoadp'),
            (e.MONOADP_PERCENT = 'monoadpPercent'),
            (e.MONOADS = 'monoads'),
            (e.MONOADS_PERCENT = 'monoadsPercent'),
            (e.FILL_RATE = 'fillRate'),
            (e.RCH_FACTOR = 'rch_factor'),
            (e.REVENUE_G = 'revenue_g'),
            (e.REVENUE_N = 'revenue_n'),
            (e.ECPMG = 'ecpm_g'),
            (e.ECPMN = 'ecpm_n');
        })(m || (m = {})),
        (function (e) {
          (e.Viewing = 'viewing'), (e.Ads = 'ads');
        })(p || (p = {})),
        (function (e) {
          (e.MINUTE = 'minute'),
            (e.THREE_MINUTES = '180'),
            (e.FIFTEEN_MINUTES = '900'),
            (e.HOUR = 'hour'),
            (e.DAY = 'day'),
            (e.WEEK = '604800'),
            (e.MONTH = '2678400'),
            (e.TOTAL = 'total'),
            (e.EMISSION = 'emission');
        })(g || (g = {})),
        (function (e) {
          (e.AVG = 'avg'), (e.TREND = 'linearTrend'), (e.NONE = 'none');
        })(f || (f = {}));
    },
    21259: function (e, t, n) {
      var r = {
        './svg-sprite-action-symbol.svg': [85358, 358],
        './svg-sprite-alert-symbol.svg': [44421, 421],
        './svg-sprite-av-symbol.svg': [9832, 832],
        './svg-sprite-communication-symbol.svg': [85750, 750],
        './svg-sprite-content-symbol.svg': [39959, 959],
        './svg-sprite-device-symbol.svg': [45081, 392],
        './svg-sprite-editor-symbol.svg': [98297, 297],
        './svg-sprite-file-symbol.svg': [58711, 711],
        './svg-sprite-hardware-symbol.svg': [82306, 306],
        './svg-sprite-image-symbol.svg': [94564, 564],
        './svg-sprite-maps-symbol.svg': [25602, 602],
        './svg-sprite-navigation-symbol.svg': [37081, 81],
        './svg-sprite-notification-symbol.svg': [4149, 149],
        './svg-sprite-places-symbol.svg': [26158, 158],
        './svg-sprite-social-symbol.svg': [76046, 46],
        './svg-sprite-toggle-symbol.svg': [47605, 605],
      };
      function i(e) {
        if (!n.o(r, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = 'MODULE_NOT_FOUND'), t);
          });
        var t = r[e],
          i = t[0];
        return n.e(t[1]).then(function () {
          return n(i);
        });
      }
      (i.keys = function () {
        return Object.keys(r);
      }),
        (i.id = 21259),
        (e.exports = i);
    },
    71364: function (e, t) {
      'use strict';
      t.Z = {
        box: 'Box_box__2nHJZ',
        boxInfo: 'Box_boxInfo__3JO9V',
        boxInfoTitle: 'Box_boxInfoTitle__2QEab',
        boxInfoContent: 'Box_boxInfoContent__2Gbda',
        boxWithWrapper: 'Box_boxWithWrapper__i_fKT',
        boxWithWrapperHeader: 'Box_boxWithWrapperHeader__3iWjC',
        boxWithWrapperHeaderCol: 'Box_boxWithWrapperHeaderCol__2i8Vz',
        boxWithWrapperDescription: 'Box_boxWithWrapperDescription__13UdX',
      };
    },
    80746: function (e, t) {
      'use strict';
      t.Z = {
        dropdownLayout: 'Dropdown_dropdownLayout__1w_kn',
        dropdown: 'Dropdown_dropdown__fVfEx',
        isVisible: 'Dropdown_isVisible__uhypE',
        bottom: 'Dropdown_bottom__16Oea',
        'bottom-left': 'Dropdown_bottom-left__-Pq2R',
        'bottom-right': 'Dropdown_bottom-right__tNk8S',
        dropdownTrigger: 'Dropdown_dropdownTrigger__1JngA',
        dropdownTriggerIcon: 'Dropdown_dropdownTriggerIcon__dWWOU',
        dropdownTriggerIconRotate: 'Dropdown_dropdownTriggerIconRotate__3RZO-',
        dropdownTriggerSelect: 'Dropdown_dropdownTriggerSelect__2HsZk',
        dropdownTriggerIconSelect: 'Dropdown_dropdownTriggerIconSelect__1-egw',
        dropdownTriggerIconHidden: 'Dropdown_dropdownTriggerIconHidden__1R6HL',
      };
    },
    14162: function (e, t) {
      'use strict';
      t.Z = {
        filterLayout: 'Filter_filterLayout__Omm3M',
        filter: 'Filter_filter__1E5tH',
        filterAddFilterButton: 'Filter_filterAddFilterButton__3BbeR',
        active: 'Filter_active__1k-XM',
        filterTrigger: 'Filter_filterTrigger__jrlB_',
        isActive: 'Filter_isActive__1lyon',
        isDisabled: 'Filter_isDisabled__321hv',
        filterTriggerContent: 'Filter_filterTriggerContent__3aEga',
        filterTriggerCloseButton: 'Filter_filterTriggerCloseButton__2YFx-',
        filterFrequencyFilterAllExcept:
          'Filter_filterFrequencyFilterAllExcept__34eEg',
        filterTriggerTitle: 'Filter_filterTriggerTitle__1mqeo',
        filterDatepickerValue: 'Filter_filterDatepickerValue__xuYMM',
        filterContent: 'Filter_filterContent__1KVtK',
        modern: 'Filter_modern__2C8Kw',
        filterDropdownLayout: 'Filter_filterDropdownLayout__3j1xW',
        filterDropdown: 'Filter_filterDropdown__3UviG',
        filterDropdownColumn: 'Filter_filterDropdownColumn__Hzu7a',
        filterSpinnerWrapper: 'Filter_filterSpinnerWrapper__2y54y',
      };
    },
    37851: function () {},
    77020: function () {},
    24654: function () {},
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [699], function () {
      return t(99283), t(32212);
    });
    e.O();
  },
]);
