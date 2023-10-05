$.ajax({
    type: 'get',
    url: 'https://api.rootnet.in/covid19-in/stats/latest',
    success: function (response) {
        console.log(response.data.regional);
        for (var i = 0; i < response.data.regional.length; i++) {
            var totalactive =
                response.data.regional[i].confirmedCasesIndian -
                response.data.regional[i].discharged;
            var tablerow = `<tr> <td>${response.data.regional[i].loc}</td> <td>${response.data.regional[i].confirmedCasesIndian}</td> <td>${response.data.regional[i].confirmedCasesForeign}</td><td>${totalactive}</td><td>${response.data.regional[i].deaths}</td><td>${response.data.regional[i].discharged}</td></tr>`;
            $('#tbody').append(tablerow);
        }

        // Corrected DataTables initialization
        $('#stats').DataTable();
    },
    error: function (error) {
        console.log(error);
    }
});
