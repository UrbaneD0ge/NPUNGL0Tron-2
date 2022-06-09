document.querySelectorAll('.pngl').forEach(item => {
  item.addEventListener('click', chgColor)
});

var colors = ['btn btn-block btn-warning', 'btn btn-block btn-success', 'btn btn-block btn-dark', 'btn btn-block btn-secondary']

function chgColor () {
  this.colors = this.colors || [...colors];
  let color = this.colors.shift();
  this.colors.push(color);
  this.className = color;
};

const today = $("#currentDay");

function displayTime() {
  var rightNow = moment().format("LLLL");
  today.text(rightNow);
}

setInterval(displayTime, 60000);

// Save button states to local storage
// function savePngl() {
//   var progress = $('.btn').className.toString();
//   var pnglID = $('.btn').attr('id');
//   localStorage.setItem(key: progress, value: pnglID);
// }

// $('.btn').on('click', savePngl);
// function getMeeting(title) {
// };

function getPubl(selectedDate) {
    let publ = new moment(selectedDate);
    let days = 6;   // number of days to subtract
    while (days > 0) {
        publ.subtract(1, 'days');
        // Do not count weekends; we can't schedule our meetings on the weekend!
        if (publ.isoWeekday() !== 6 && publ.isoWeekday() !== 7) {
            days -= 1;
        }
    }
    return publ.format("dddd, MMMM Do");
};

$('#submit').on('click', function OnClickEvent (event) {
    // set input values to variables
    let title = $('#NPU').val();

    // get datepicker input and convert to moment object
    dateControl = moment(document.querySelector('input[type="date"]').value);
    date = dateControl.format("MMMM Do, YYYY");
    day = dateControl.format("dddd");
    month = dateControl.format("MMMM");
    year = dateControl.format("YYYY");
    casual = dateControl.format("dddd, MMMM Do");
    short = dateControl.format("MMMM Do");
    // publ = date minus 5 business days
    // publ = moment(dateControl).subtract(5, 'weekdays').format("dddd, MMMM Do");



    // use getMeeting function to get meeting info
    function getMeeting(meetDetailProto) {
        switch (meetDetailProto) {
            case 'A':
                meet = `Meeting ID: 856 7471 3054
                Dial In: +1 646 558 8656
                Access Code: 856 7471 3054#`
                zURL = `https://atlantaga-gov.zoom.us/meeting/register/tZErcO2vrzgqH9ArhFC4ZPNWdLs4yiiBa749`
                time = `7:00PM`
                chair = `Brinkley Dickerson`
                chairHon = `Mr. Dickerson`
                chairE = `wbdnatl@gmail.com`
                planner = `Joel Carnow`
                plannerE = `jdcarnow@atlantaga.gov`
                break;
            case 'B':
                meet = `Meeting ID: 832 4836 8602
                Dial In: +1 646 558 8656
                Access Code: 832 4836 8602#`
                zURL = `https://us06web.zoom.us/meeting/register/tZcvc-GrqDMsGtbvnnKzpDF2BbUXxQuxx_N9`
                time = `7:00PM`
                chair = `Nancy Bliwise`
                chairHon = `Dr. Bliwise`
                chairE = `nancy.bliwise@emory.edu`
                planner = `Jessica Lavandier`
                plannerE = `jlavandier@atlantaga.gov`
                break;
            case 'C':
                meet = `Meeting ID: 934 4511 6340
                Dial In: +1 646-558-8656
                Access Code: 934 4511 6340#`
                zURL = `https://us06web.zoom.us/meeting/register/tJcpc-yprz0pHtRSCH0nTWazoXg72njNpQ5R`
                time = `7:00PM`
                chair = `Zack Gober`
                chairHon = `Mr. Gober`
                chairE = `zgober@lavista.com`
                planner = `Alex Deus`
                plannerE = `adeus@atlantaga.gov`
                break;
            case 'D':
                meet = `Meeting ID: 953 5469 3520
                Dial In: +1 646-558-8656
                Access Code: 953 5469 3520#`
                zURL = `https://us06web.zoom.us/meeting/register/tJEucu2upzgvGNRkuGmiYcE2akuYMkFc1av`
                time = `7:30PM`
                chair = `Jim Martin`
                chairHon = `Mr. Martin`
                chairE = `james.martin@me.gatech.edu`
                planner = `Nate Hoelzel`
                plannerE = `nhoelzel@atlantaga.gov`
                break;
            case 'E':
                meet = `Webinar ID: 920 3606 4688
                Webinar ID: +1 929-436-2866`
                zURL = `https://us06web.zoom.us/webinar/register/WN_TejPEO2GTDygUW6uq02yAg`
                time = `6:30PM`
                chair = `Nabil Hammam`
                chairHon = `Mr. Hammam`
                chairE = `nabilhammam@yahoo.com`
                planner = `Monique Forte`
                plannerE = `mbforte@atlantaga.gov`
                break;
            case 'F':
                meet = `Meeting ID: 928 1513 1493
        Dial In: +1 646-558-8656
        Access Code: 928 1513 1493#`
                zURL = `https://us06web.zoom.us/meeting/register/tJYlduyprTouE9c3GbvSNXk-QnBIMbRu-Zg3`
                time = `7:00PM`
                chair = `Debbie Skopczynski`
                chairHon = `Ms. Skopczynski`
                chairE = `chair@npufatlanta.org`
                planner = `Doug Young`
                plannerE = `dyoung@atlantaga.gov`
                break;
            case 'G':
                meet = `Meeting ID: 935 8093 0222
        Dial In: +1 646-558-8656
        Access Code: 935 8093 0222#`
                zURL = `https://us06web.zoom.us/meeting/register/tJcof-mhrTsoGNbC6XrB8Sr6HKX7E8hPLfjH`
                time = `7:00PM`
                chair = `Andrew Anderson`
                chairHon = `Mr. Anderson`
                chairE = `andrewnanderson2012@icloud.com`
                planner = `Kelly Dervarics`
                plannerE = `kmdervarics@atlantaga.gov`
                break;
            case 'H':
                meet = `Meeting ID: 976 5253 7837
        Dial In: +1 646-558-8656
        Access Code: 976 5253 7837#`
                zURL = `https://zoom.us/j/97652537837`
                time = `7:00PM`
                chair = `R.R. Harris`
                chairHon = `Ms. Harris`
                chairE = `harrischairnpuh@gmail.com`
                planner = `Natasha Dyer`
                plannerE = `ndyer@atlantaga.gov`
                break;
            case 'I':
                meet = `Meeting ID: 926 1333 2610
        Dial In: +1 646-558-8656
        Access Code: 926 1333 2610#`
                zURL = `https://us06web.zoom.us/meeting/register/tJYrduqrrTksG9Q0zhO-fIWbSdULod3adqpH`
                time = `7:00PM`
                chair = `Eunice M. Glover`
                chairHon = `Ms. Glover`
                chairE = `chair.npui@gmail.com`
                planner = `Susan Coleman`
                plannerE = `sucoleman@atlantaga.gov`
                break;
            case 'J':
                meet = `Meeting ID: 914 9575 9127
        Dial In: +1 646-558-8656
        Access Code: 914 9575 9127#`
                zURL = `https://us06web.zoom.us/meeting/register/tJUpfuyvqzIrGNPisSUqavtB5wdLiJTeHVFD`
                time = `7:00PM`
                chair = `Anissa Ferrell`
                chairHon = `Ms. Ferrell`
                chairE = `chair@npujatlanta.com`
                planner = `Keyetta Holmes`
                plannerE = `kmholmes@atlantaga.gov`
                break;
            case 'K':
                meet = `Meeting ID: 961 2883 9632
        Dial In: +1 646 558 8656
        Access Code: 961 2883 9632#`
                zURL = `https://us06web.zoom.us/meeting/register/tJ0pfuuuqjosG9SFlf4neD6B5HLB18AX5zGe`
                time = `6:30PM`
                chair = `Mohamed Sillah`
                chairHon = `Mr. Sillah`
                chairE = `npukatlanta@gmail.com`
                planner = `Tshaka Warren`
                plannerE = `twarren@atlantaga.gov`
                break;
            case 'L':
                meet = `Meeting ID: 961 2883 9632
        Dial In: +1 646 558 8656
        Access Code: 961 2883 9632#`
                zURL = `https://us06web.zoom.us/meeting/register/tJIsdeGgrTIsGda9TZkaUfsNakMmS0zxpVe4`
                time = `6:30PM`
                chair = `Shade'Y. Jones`
                chairHon = `Ms. Jones`
                chairE = `chair@npulatlanta.org`
                planner = `Lenise Lyons`
                plannerE = `llyons@atlantaga.gov`
                break;
            case 'M':
                meet = `Meeting ID: 972 3364 7127
        Dial In: +1 646 558 8656
        Access Code: 972 3364 7127#`
                zURL = `https://us06web.zoom.us/meeting/register/tJMvdOquqjwrGNMzjeUO15u88PSooneRz2Fp`
                time = `6:15PM`
                chair = `Forrest Coley`
                chairHon = `Forrest`
                chairE = `chair@npumatlanta.org`
                planner = `Matt Adams`
                plannerE = `mdadams@atlantaga.gov`
                break;
            case 'N':
                meet = `Meeting ID: 970 8448 6658
        Dial In: +1 646 558 8656
        Access Code: 970 8448 6658#`
                zURL = `https://us06web.zoom.us/meeting/register/tJMtf-2spj0sH9z2bFgZI2LX-Bna7OWVyoFq`
                time = `7:00PM`
                chair = `Catherine Woodling`
                chairHon = `Ms. Woodling`
                chairE = `npunchair@gmail.com`
                planner = `Daniel Vasquez`
                plannerE = `dvasquez@atlantaga.gov`
                break;
            case 'O':
                meet = `Meeting ID: 812 4045 1335
        Dial In: +1 646 558 8656
        Access Code: 812 4045 1335#`
                zURL = `https://us06web.zoom.us/meeting/register/tJIsdeGgrTIsGda9TZkaUfsNakMmS0zxpVe4`
                time = `6:30PM`
                chair = `Jeanne Tropper`
                chairHon = `Ms. Tropper`
                chairE = `chair@atlantanpuo.org`
                planner = `Racquel Jackson`
                plannerE = `acanales@atlantaga.gov`
                break;
            case 'P':
                meet = `Meeting ID: 940 8702 7097
        Dial In: +1 646 558 8656
        Access Code: 940 8702 7097#`
                zURL = `https://us06web.zoom.us/meeting/register/tJAtf-6orDwqE9MQK1U4WkG2s0y9ZSsZj55C`
                time = `7:00PM`
                chair = `Reginald Rushin`
                chairHon = `Mr. Rushin`
                chairE = `Rushinr58@gmail.com`
                planner = `Nicole Mitchell`
                plannerE = `nymitchell@atlantaga.gov`
                break;
            case 'Q':
                meet = `Meeting ID: 985 5727 1692
        Dial In: +1 646 558 8656
        Access Code: 985 5727 1692#`
                zURL = `https://us06web.zoom.us/meeting/register/tJwocu6qqTosE9bW-XHCnSGMWaOAnKCKqrkS`
                time = `6:30PM`
                chair = `Corrie McCrary`
                chairHon = `Mr. McCrary`
                chairE = `corriemccrary@bellsouth.net`
                planner = `Inyo Cue`
                plannerE = `icue@atlantaga.gov`
                break;
            case 'R':
                meet = `Meeting ID: 886 2169 6544
        Dial In: +1 646 558 8656
        Access Code: 886 2169 6544#`
                zURL = `https://us06web.zoom.us/meeting/register/tZwrdeiupz0vHtCSIPdEIa-N6avVbaNnGXlb`
                time = `7:00PM`
                chair = `Donovan A. Dodds`
                chairHon = `Mr. Dodds`
                chairE = `npur.exc@gmail.com`
                planner = `Tony McNeal`
                plannerE = `mmcneal@atlantaga.gov`
                break;
            case 'S':
                meet = `Meeting ID: 993 2987 4388
        Dial In: +1 646 558 8656
        Access Code: 993 2987 4388#`
                zURL = `https://us06web.zoom.us/meeting/register/tJ0udeCgqT8pEtycXQZ9s7Tk4_0J_73DZmQD`
                time = `7:00PM`
                chair = `Nick Hess`
                chairHon = `Mr. Hess`
                chairE = `chair@npu-s.org`
                planner = `Chris McIntosh`
                plannerE = `cmintosh@atlantaga.gov`
                break;
            case 'T':
                meet = `Meeting ID: 973 7964 7582
        Dial In: +1 646 558 8656
        Access Code: 973 7964 7582#`
                zURL = `https://us06web.zoom.us/meeting/register/tJMucOCuqjwvEtbo8Vddwe6J5Ykv5858FP9y`
                time = `7:00PM`
                chair = `Angela Clyde`
                chairHon = `Ms. Clyde`
                chairE = `chair@nputatlanta.com`
                planner = `Monique Forte`
                plannerE = `mbforte@atlantaga.gov`
                break;
            case 'U':
                meet = `Meeting ID: 123 4567 8901
        Dial In: +1 555 555 5555
        Access Code: 123 4567 8901#`
                zURL = `https://kipdunlap.me/`
                time = `10:24PM`
                chair = `Kip Dunlap`
                chairHon = `Mr. Dunlap`
                chairE = `Kip@KipDunlap.me`
                planner = `Simit`
                plannerE = `Simit@KipDunlap.me`
                break;
            case 'V':
                meet = `Meeting ID: 992 1132 0112
        Dial In: +1 646 558 8656
        Access Code: 992 1132 0112#`
                zURL = `https://us06web.zoom.us/meeting/register/tJ0vduirrDsrG9Zu7U9P7xTvxATCljNqAgyJ`
                time = `7:00PM`
                chair = `Stephanie Flowers`
                chairHon = `Ms. Flowers`
                chairE = `stephanieflowers@bellsouth.net`
                planner = `Nathan Brown`
                plannerE = `nathanbrown@atlantaga.gov`
                break;
            case 'W':
                meet = `Meeting ID: 916 2580 5725
        Dial In: +1 646 558 8656
        Access Code: 916 2580 5725#`
                zURL = `https://us06web.zoom.us/meeting/register/tJUrdeygrj4tGNFBx8eTSLrBvv1Zy4uPsqgD`
                time = `7:00PM`
                chair = `Ronald Lall`
                chairHon = `Mr. Lall`
                chairE = `leadership@npu-w.org`
                planner = `Christian Olteanu`
                plannerE = `colteanu@atlantaga.gov`
                break;
            case 'X':
                meet = `Meeting ID: 940 6017 9815
        Dial In: +1 646 558 8656
        Access Code: 940 6017 9815#`
                zURL = `https://us06web.zoom.us/meeting/register/tJAtcempqTIiG9Gd_h-5Tcordb6gJXHz14r1`
                time = `7:00PM`
                chair = `Zachary Adriaenssens`
                chairHon = `Mr. Adriaenssens`
                chairE = `Zadriaenssens3@gmail.com`
                planner = `Nate Hoelzel`
                plannerE = `nhoelzel@atlantaga.gov`
                break;
            case 'Y':
                meet = `Meeting ID: 956 6564 6943
        Dial In: +1 646 558 8656
        Access Code: 956 6564 6943#`
                zURL = `https://us06web.zoom.us/meeting/register/tJAtcempqTIiG9Gd_h-5Tcordb6gJXHz14r1`
                time = `7:00PM`
                chair = `Troy Nunnally`
                chairHon = `Dr. Nunnally`
                chairE = `troynunnally@brainrainsolutions.com`
                planner = `Anna A. Johnson`
                plannerE = `anajohnson@atlantaga.gov`
                break;
            case 'Z':
                meet = `Meeting ID: 929 8209 4616
        Dial In: +1 646 558 8656
        Access Code: 929 8209 4616#`
                zURL = `https://us06web.zoom.us/meeting/register/tJYkf-uopz8sG9J66kd94W5qRcrwP2Qb_jQ7`
                time = `7:00PM`
                chair = `Anne E. Phillips`
                chairHon = `Ms. Phillips`
                chairE = `anne.phillips@bellsouth.net`
                planner = `Thomas Otoo`
                plannerE = `totoo@atlantaga.gov`
                break;
            case 'APAB':
                meet = `Meeting ID: 947 9575 5692
        Dial In: +1 646-558-8656
        Access Code: 947 9575 5692#`
                zURL = `https://us06web.zoom.us/meeting/register/tJAqfuyvqz4sE9aRG-HDEoLldjZtzVXF4uuK`
                time = `10:00AM`
                chair = `Anne E. Phillips`
                chairHon = `Ms. Phillips`
                chairE = `anne.phillips@bellsouth.net`
                planner = `Samantha Terry`
                plannerE = `snterry@atlantaga.gov`
                break;
            // default:
            //     console.log(`Please select one of the 25 NPUs A-Z or APAB.`)
            //     break;
        }
    return { meet: meet, chair: chair, planner: planner, time: time, chairE: chairE, plannerE: plannerE, zURL: zURL, chairHon: chairHon };
    };

    console.log(title);
    let meeting = getMeeting(title);

    // check which form boxes are selected
    if ($('#draft')[0].checked) {
        let publ = getPubl(dateControl);
        console.log(publ);
        console.log('Draft');
        $('#textZone').append('<div class="y-2 calendar col-12"><h2><a href="mailto:npu-' + title + '?subject=NPU-' + title + ' ' + month + ' draft meeting agenda&cc=dvasquez@atlantaga.gov; kdunlap@atlantaga.gov&body=Good day ' + meeting.chairHon + ' and NPU-' + title + ',%0D%0DPlease see the attached draft version of the NPU-' + title + ' ' + month + ' meeting agenda. If you notice any items missing, miscategorized, or would like to make other edits please let me know by EOB DAYSBEFOREPUBL.%0D%0DThank you,">DRAFT</a></h2>'
            + '<p id="draft" onclick="copy(this)"><strong>NPU-' + title + ' ' + month + ' draft meeting agenda</strong><br></br>Good day ' + meeting.chairHon + ' and NPU-' + title + ',<br></br>Please see the attached draft version of the NPU-' + title + ' ' + month + ' meeting agenda. If you notice any items missing, miscategorized, or would like to make other edits please let me know <u>by EOB ' + publ + '</u>.<br></br>Thank you,</p></div>');
    };
    if ($('#final')[0].checked) {
        $('#textZone').append('<div class="y-2 calendar col-12"><h2><a href="mailto:npu-' + title + '?subject=' + month + ' Final meeting agenda&cc=dvasquez@atlantaga.gov; kdunlap@atlantaga.gov&body=Good day ' + meeting.chairHon + ' and NPU-' + title + ',%0D%0DPlease see the attached Final version of the NPU-' + title + ' ' + month + ' meeting agenda.%0D%0DThank you,">FINAL</a></h2>'
            + '<p onclick="copy(this)"><strong>' + month + ' Final meeting agenda</strong><br></br>Good day ' + meeting.chairHon + ' and NPU-' + title + ',<br></br>Please see the attached Final version of the NPU-' + title + ' ' + month + ' meeting agenda.<br></br>Thank you,</p></div>')
    console.log('Final');
    };
    if ($('#distro')[0].checked) {
        $('#textZone').append('<div  class="y-2 calendar col-12"><h2><a href="mailto:npumail@atlantaga.gov?subject=NPU -' + title + ' Monthly Meeting Notification&subject=NPU – ' + title + ' Monthly Meeting Notification&body=Greetings!%0D%0A%0D%0AYou are receiving this e-mail because you opted in for monthly meeting notices for NPU-' + title + '.%0D%0A%0D%0AAgendas for monthly NPU meetings are posted on our website: https://www.atlantaga.gov/government/departments/city-planning/neighborhood-and-npu-contacts%0D%0A%0D%0ADATE: ' + date + '%0DTIME: ' + meeting.time + '%0DLOCATION: Virtual%0D%0A%0D%0ATo register in advance, go to:%0D' + meeting.zURL + '%0D' + meeting.meet + '%0D%0A%0D%0ACity of Atlanta residents are encouraged to attend their local Neighborhood Planning Unit (NPU) meetings to review proposed development, applications for alcohol licenses and special events, as well as amendments to the City’s Zoning Ordinance and Comprehensive Development Plan. Thanks again for your commitment to being actively involved in the City of Atlanta’s future!%0D%0A%0D%0AIf you desire additional information regarding NPU-' + title + ', please contact the following person(s):%0D%0A%0D%0ANPU Chair: ' + meeting.chair+ ' (' + meeting.chairE + ')%0DNPU Planner: ' + meeting.planner + ' (' + meeting.plannerE + ')%0D%0A%0D%0AThank you,">DISTRO LIST</a></h2>'
            + '<p id="distro" onclick="copy(this)"><strong>NPU – ' + title + ' Monthly Meeting Notification</strong><br></br>Greetings!<br></br>You are receiving this e-mail because you opted in for monthly meeting notices for NPU-' + title + '.<br></br>Agendas for monthly NPU meetings are posted on our website:<br><a href="https://www.atlantaga.gov/government/departments/city-planning/neighborhood-and-npu-contacts">Directory and NPU Meeting Agendas | Atlanta, GA (AtlantaGA.gov)</a><br></br>DATE: ' + date + '<br>TIME: ' + meeting.time + '<br>LOCATION: Virtual<br>Register in advance by clicking <a href="' + meeting.zURL + '">HERE</a><br>' + meeting.meet + '<br></br>City of Atlanta residents are encouraged to attend their local Neighborhood Planning Unit (NPU) meetings to review proposed development, applications for alcohol licenses and special events, as well as amendments to the City’s Zoning Ordinance and Comprehensive Development Plan. Thanks again for your commitment to being actively involved in the City of Atlanta’s future!<br></br>If you desire additional information regarding NPU-' + title + ', please contact the following person(s):<br></br>NPU Chair: ' + meeting.chair+ ' (' + meeting.chairE + ')<br>NPU Planner: ' + meeting.planner + ' (' + meeting.plannerE + ')<br></br>Thank you,</p></div>')
    console.log('Distro');
     };
    if ($('#access')[0].checked) {
        $('#textZone').append('<div class="y-2 calendar col-12"><h2>VIRTUAL MEETING ACCESS INFO</h2><p id="access" onclick="copy(this)"><strong>NPU-' + title + ' ' + month + ' Virtual meeting access info </strong><br></br>Hello,<br></br>The NPU-' + title + ' ' + month + ' meeting will be held remotely.<br></br><strong>NPU-' + title + ' | ' + casual + ' ' + meeting.time + '</strong><br></br>Register in advance by clicking <a href="' + meeting.zURL + '">HERE</a><br>' + meeting.meet + '<br></br>Please continue to work with NPU-' + title + ' Chair ' + meeting.chair + ' (' + meeting.chairE + ') to confirm details of your presentation.<br></br>Thank you,</p></div>')
    console.log('Access');
    }
    if ($('#approved')[0].checked) {
        $('#textZone').append('<div class="y-2 calendar col-12"><h2><a href="mailto:?subject=APPROVED NPU-' + title + ' ' + month + ' presentation&cc=kdunlap@atlantaga.gov; dvasquez@atlantaga.gov&body=Hello,%0D%0A%0D%0AYour request to present at the NPU-' + title + ' ' + short + ' has been approved.%0D%0A%0D%0APlease reach out to NPU-' + title + ' Chair ' + meeting.chair + ' (' + meeting.chairE + ') to iron out the details of the presentation.%0D%0A%0D%0AThank you,%0D%0A%0D%0A">PRESENTATION APPROVED</a></h2>'
            + '<p id="approved" onclick="copy(this)"><strong>[APPROVED] NPU-' + title + ' ' + month + ' presentation</strong><br></br>Hello,<br></br>Your request to present at the NPU-' + title + ' ' + short + ' meeting has been approved.<br></br>Please reach out to NPU-' + title + ' Chair ' + meeting.chair + ' (' + (meeting.chairE) + ') to iron out the details of the presentation.<br></br>Thank you,</p></div>')
    console.log('Approved');
    }
    if ($('#nextdoor')[0].checked) {
        $('#textZone').append('<div class="y-2 calendar col-12"><h2>NEXTDOOR</h2><p id="nextdoor" onclick="copy(this)"><strong>NPU-' + title + ' | ' + casual + ' ' + meeting.time + '</strong><br></br>Hey Neighbors!<br></br>The summer is upon us and Atlanta is growing as fast as the Kudzu. Attend your NPU meetings to hear what’s happening in your neighborhood, and have your say on the projects and events that affect you!<br></br>NPU-' + title + ' meets next ' + casual + ' at ' + meeting.time + '<br></br>To register in advance go to:<br>' + meeting.zURL + '<br>' + meeting.meet + '<br></br>Thank you,</p></div>')
    console.log('Nextdoor');
    }
});

function clearForm() {
    $('#textZone').empty();
    console.log('cleared');
}

// function doFinal() {
//     $('draft')[0].value = false;
//     console.log('beep boop');
// }

// Set datepicker to today's date with moment.js
$(document).ready(function () {
    finDate = $('input[type="date"]').val(new moment().add(7, 'days').toISOString(true).substring(0, 10));
});

function copy(that){
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = that.textContent;
    inp.select();
    // document.execCommand('copy', false);
    navigator.clipboard.writeText(inp.value).then(function() {
        console.log('Copying to clipboard was successful!');
        // flash text on copy
        $(that).css('color', '#fff');
        setTimeout(function(){
            $(that).css('color', '#000');
        }, 100);
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
    inp.remove();
  }