function jobsList() {
  $(document).ready(function(){
    const url = 'https://www.latah.id.us/api/getJobs';
    $.getJSON(url, function(data){
      var groupedData = _.groupBy(data, function (d) { return d.Department });
      console.log(groupedData);

      $.each(data, function(i,r) {
        // console.log(r)
        const dept = r.Department;
        const deptT = dept.replace(/\s/g, "");
        const title = r.JobTitle;
        var file = "'" + r.PdfPath + "'";
        // console.log(deptT)

        let newContent = '';

        newContent += '<div class="panel panel-default">';
        newContent +=   '<div class="panel-heading">';
        newContent +=     '<h4 class="panel-title">';
        newContent +=       '<a data-toggle="collapse" data-parent="#accordion" href="#' + r.Id + '">' + dept + ' - ' + title + '</a>';
        newContent +=     '</h4>';
        newContent +=   '</div>';
        newContent +=   '<div id="' + r.Id + '" class="panel-collapse collapse">';
        newContent +=     '<div class="panel-body">';
        newContent +=       '<div class="list-group">';
        newContent +=         '<div class="list-group-item">';
        newContent +=           '<h4>' + title + '</h4>';
        newContent +=           '<p>' + r.BriefDescription + '</p>';
        newContent +=           'Hours: ' + r.Hours + '<br />';
        newContent +=           'Salary Range: ' + r.SalaryRange + '<br />';
        newContent +=           '<a href="#" onclick="downloadJobDesc(' + file + '); return false;' + '">' + 'Full Description' + '</a>' + '<br />';
        newContent +=         '</div>'
        newContent +=       '</div>';
        newContent +=     '</div>';
        newContent +=   '</div>';
        newContent += '</div>';
        $('#post p').css('white-space', 'wrap')
        // console.log(newJob)
        $('#post').append(newContent);
      });
    });
  });
}
function downloadJobDesc(filename){
  //console.log('request to download' + filename);
  var url = 'https://www.latah.id.us/api/downloadJobDesc?fileName=' + filename
  $.ajax({
    url: '',
    success: function(){
      window.open(url);
    },
    async: false
  });
}
