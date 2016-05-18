/**
 * Created by Phoenix on 5/18/16.
 */
var currentTab;
var composeCount = 0;
//initilize tabs
$(function () {

    //when ever any tab is clicked this method will be call
    $("#myTab").on("click", "a", function (e) {
        e.preventDefault();

        $(this).tab('show');
        $currentTab = $(this);
    });


    registerComposeButtonEvent();
    registerCloseEvent();
});

////this method will demonstrate how to add tab dynamically
//function registerComposeButtonEvent() {
//    /* just for this demo */
//    $('#composeButton').click(function (e) {
//        e.preventDefault();
//        console.log("composed clicked");
//
//        var tabId = "compose" + composeCount; //this is id on tab content div where the
//        composeCount = composeCount + 1; //increment compose count
//
//        $('.nav-tabs').append('<li><a href="#' + tabId + '"><button class="close closeTab" type="button" >x</button>Hi</a></li>');
//        $('.tab-content').append('<div class="tab-pane" style="height: 800px id="' + tabId + '"></div>');
//
//        /*
//         <div class="graph_panel container">
//
//         <div class="graph-container container col-xs-12 col-sm-12 col-md-8 col-lg-8 bg-error "></div>
//         <div class="graph-info container col-xs-12 col-sm-12 col-md-4 col-lg-4 bg-danger"></div>
//         </div>
//         */
//
//        //craeteNewTabAndLoadUrl("", "./SamplePage.html", "#" + tabId);
//
//        $(this).tab('show');
//        showTab(tabId);
//        registerCloseEvent();
//    });
//
//}

//this method will register event on close icon on the tab..
function registerCloseEvent() {

    $(".closeTab").click(function () {

        //there are multiple elements which has .closeTab icon so close the tab whose close icon is clicked
        var tabContentId = $(this).parent().attr("href");
        $(this).parent().parent().remove(); //remove li of tab
        $('#myTab a:last').tab('show'); // Select first tab
        $(tabContentId).remove(); //remove respective tab content

    });
}

//shows the tab with passed content div id..paramter tabid indicates the div where the content resides
function showTab(tabId) {
    $('#myTab a[href="#' + tabId + '"]').tab('show');
}
//return current active tab
function getCurrentTab() {
    return currentTab;
}

//This function will create a new tab here and it will load the url content in tab content div.
function craeteNewTabAndLoadUrl(parms, url, loadDivSelector) {

    $("" + loadDivSelector).load(url, function (response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error getting details ! ";
            $("" + loadDivSelector).html(msg + xhr.status + " " + xhr.statusText);
            $("" + loadDivSelector).html("Load Ajax Content Here...");
        }
    });

}

//this will return element from current tab
//example : if there are two tabs having  textarea with same id or same class name then when $("#someId") whill return both the text area from both tabs
//to take care this situation we need get the element from current tab.
function getElement(selector) {
    var tabContentId = $currentTab.attr("href");
    return $("" + tabContentId).find("" + selector);

}


function removeCurrentTab() {
    var tabContentId = $currentTab.attr("href");
    $currentTab.parent().remove(); //remove li of tab
    $('#myTab a:last').tab('show'); // Select first tab
    $(tabContentId).remove(); //remove respective tab content
}/**
 * Created by Phoenix on 4/25/16.
 */
