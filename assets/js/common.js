const csvmaker = function (data) {

    // Empty array for storing the values
    csvRows = [];

    // Headers is basically a keys of an object which
    // is id, name, and profession
    const headers = Object.keys(data[0]);

    // As for making csv format, headers must be
    // separated by comma and pushing it into array
    csvRows.push(headers.join(','));

    // Pushing Object values into the array with
    // comma separation

    // Looping through the data values and make
    // sure to align values with respect to headers
    for (const row of data) {
        const values = headers.map(e => {
            return row[e]
        })
        csvRows.push(values.join(','))
    }

    // const values = Object.values(data).join(',');
    // csvRows.push(values)

    // returning the array joining with new line
    return csvRows.join('\n');
}

const download = function (data) {

    // Creating a Blob for having a csv file format
    // and passing the data with type
    const blob = new Blob([data], { type: 'text/csv' });

    // Creating an object for downloading url
    const url = window.URL.createObjectURL(blob)

    // Creating an anchor(a) tag of HTML
    const a = document.createElement('a')

    // Passing the blob downloading url
    a.setAttribute('href', url)

    // Setting the anchor tag attribute for downloading
    // and passing the download file name
    a.setAttribute('download', 'download.csv');

    // Performing a download with click
    a.click()
}

function getDataReport()
{
    var start_date = $("#job_management_reports_start_date").val();
    var end_date = $("#job_management_reports_end_date").val();
    $.ajax ({
            data: {
                start_date: start_date, end_date: end_date
            },
            url: "/populateReportData",
            type: "POST",
            dataType: "json",
            async: false,
            headers: { "X-CSRF-Token": $('input[name="_csrf"]').val() },
            success: function (data){
                
                const data2 = data.map(row => ({
                    Ticket_No: row.ticket_no,
                    Project_Name: row.project_name,
                    Collection_Site_Name: row.collection_site_name,
                    Collection_Address: row.collection_address,
                    Collection_Company_Name: row.collection_company_name,
                    Project_No: row.project_no,
                    Delivery_Site_Name: row.delivery_site_name,
                    Delivery_Address: row.delivery_address,
                    Delivery_Company_Name: row.delivery_company_name,
                    Material: row.material,
                    Vehicle_Type: row.vehicle_type,
                    Container_Size: row.container_size,
                    Operator: row.operator,
                    Haulier_Name: row.haulier_name,
                    Vehicle_Reg_No: row.vehicle_reg_no,
                    Driver: row.driver,
                    Waiting_Time: row.waiting_time,
                    Date: row.date,
                    Time: row.time,
                    Reference: row.reference,
                    Weight: row.weight,
                    Tare: row.tare,
                    Net: row.net,
                    Unit: row.unit,
                    External_Ticket_No: row.external_ticket_no,
                    Before_Loading_Distance: row.before_loading_distance,
                    Collection_To_Delivery_Point_Distance: row.collection_to_delivery_point_distance,
                    Start_Post_Code: row.start_post_code,
                    Collection_Post_Code: row.collection_post_code,
                    Delivery_Post_Code: row.delivery_post_code,
                    Total_kg_CO2e: row.total_kg_co2e,
                    Kg_CO2e_of_CO2: row.kg_co2e_of_co2,
                    Kg_CO2e_of_CH4: row.kg_co2e_of_ch4,
                    Kg_CO2e_of_N2O: row.kg_co2e_of_n2o
                }))

                //console.log(jsondata)

                //console.log(csvmaker(data))

                const csvdata = csvmaker(data2);
                download(csvdata);
            }
        });
}


function validateEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function validateName(name) {
    var regex = /^[a-zA-Z ]*$/;
    return regex.test(String(name).toLowerCase());
}

function toggleSort(table, obj) {
    var table = $(table);
    var th = $(obj);
    var thIndex = th.index();
    var sortType = th.attr('sort-type');
    var inverse = ((sortType == 'asc') ? false : true);
    table.find('td').filter(function () {
        return $(this).index() === thIndex;
    }).sortElements(function (a, b) {
        return $.text([a]) > $.text([b]) ? inverse ? -1 : 1 : inverse ? 1 : -1;
    }, function () {
        return this.parentNode;
    });
    inverse = !inverse;
    th.attr('sort-type', ((sortType == 'asc') ? 'desc' : 'asc'));
    if (sortType == 'asc') {
        $(th).find('.i12').removeClass('ascending');
    }
    else {
        $(th).find('.i12').addClass('ascending');
    }
}

function removeSearchText(table, text_placeholder) {
    $(text_placeholder).val('');
    $(table + " tr").each(function (index) {
        $(this).show();
    });
    $(table).find('.no_match').remove();
    $("#remove_search_hover_image").hide();
    $("#search_hover_image").removeAttr("style");
    $("#search_default_image").removeAttr("style");
}

function textsearch(table, obj) {
    var hideElement = 0;
    var showElement = 0;
    var searchText = $.trim($(obj).val().toLowerCase());
    $(table + " tr").each(function (index) {
        if (index !== 0) {
            if ($(this).text().toLowerCase().indexOf(searchText) === -1) {
                $(this).hide();
                hideElement++;
            }
            else {
                $(this).show();
                showElement++;
            }
        }
    });
    if (!showElement) {
        $(table + " tr:last").after('<tr class="no_match"><td colspan="6" align="center">No match found.</td></tr>');
    }
    else {
        $(table).find('.no_match').remove();
    }

    var searchString = searchText.length;
    if (searchString) {
        $("#search_default_image").hide();
        $("#search_hover_image").hide();
        $("#remove_search_hover_image").show();
    }
    else {
        $("#remove_search_hover_image").hide();
        $("#search_hover_image").removeAttr("style");
        $("#search_default_image").removeAttr("style");
    }
}

function togglePasswordVisibility(element, image, show_image, hide_image) {
    if ($.trim($(element).val()) != "") {
        if ($(element).prop('type') == 'text') {
            $(element).prop('type', 'password');
            $(image).prop('src', show_image);
        }
        else {
            $(element).prop('type', 'text');
            $(image).prop('src', hide_image);
        }
    }
}

function validateFloatKeyPress(el, evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    var number = el.value.split('.');
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    if (number.length > 1 && charCode == 46) {
        return false;
    }
    var caratPos = getSelectionStart(el);
    var dotPos = el.value.indexOf(".");
    if (caratPos > dotPos && dotPos > -1 && (number[1].length > 1)) {
        return false;
    }
    return true;
}

function getSelectionStart(o) {
    if (o.createTextRange) {
        var r = document.selection.createRange().duplicate()
        r.moveEnd('character', o.value.length)
        if (r.text == '') return o.value.length
        return o.value.lastIndexOf(r.text)
    } else return o.selectionStart
}

function displayPreviewImage(input, placeholder, type, alter_image, error_placeholder) {
    if (input.files && input.files[0]) {
        var allowed_file_type = ["jpg", "jpeg", "png", "bmp", "gif"];
        var file_name = $(input).val();
        var data = file_name.split('.');
        var extension = data[data.length - 1].toLowerCase();
        if ($.inArray(extension, allowed_file_type) === -1) {
            $(placeholder).attr('src', alter_image);
            $(input).val("");
            $(error_placeholder).html("Allowed file type : jpg, jpeg, png, bmp or gif.");
            $(error_placeholder).slideDown("slow");
            return false;
        }
        else {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(placeholder).attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
            $(error_placeholder).html("");
            $(error_placeholder).slideUp("slow");
        }
    }
}

function closeAlert() {
    $('.alert-danger').slideUp('slow');
}

function validatePassword(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*])[a-zA-Z0-9~!@#$%^&*]{8,}$/;
    return re.test(String(password));
}

function validateUsername(user_name) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_.])(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    return re.test(String(user_name));
}