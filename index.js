var title;
var date;
var meeting;

document.querySelectorAll('.pngl').forEach(item => {
  item.addEventListener('click', chgColor)
});

colors = ['btn btn-block btn-warning', 'btn btn-block btn-success', 'btn btn-block btn-dark', 'btn btn-block btn-primary']

function chgColor () {
  let color = colors.shift();
  colors.push(color);
  this.className = color;
};

// Set datepicker to today's date
document.getElementById('date').value = new Date().toISOString().substring(0, 10);

const today = $("#currentDay");

function displayTime() {
  var rightNow = moment().format("LLLL");
  today.text(rightNow);
}

setInterval(displayTime, 1000);

// use Temporal js or Moment.js to get current month, month.length, weekday of 1st day

const wkdays = new moment.weekdays();
console.log(wkdays);

const month = new moment().format("MMMM");
const year = new moment().format("YYYY");
console.log(month);
console.log(year)

function getThirdFriday(year, month){
  // Convert date to moment (month 0-11)
  var myMonth = moment({ year: year, month: month });

  // Get first Friday of the first week of the month
  var firstFriday = myMonth.weekday(4);
  var nWeeks = 2;
  // Check if first Friday is in the given month
  if( firstFriday.month() != month ){
      nWeeks++;
  }
  // Return 3rd Friday of the month formatted (custom format)
  return firstFriday.add(nWeeks, 'weeks').format("DD MMMM YYYY");
}

// NPU dates are essentially calendar columns, since they do not deviate from their weekdays. Must handle rescheduling, cancellation.

// Array of NPUs, starting from 1st day of month, assign to calendar grid.

// Save button states to local storage
// function savePngl() {
//   var progress = $('.btn').className.toString();
//   var pnglID = $('.btn').attr('id');
//   localStorage.setItem(key: progress, value: pnglID);
// }

// $('.btn').on('click', savePngl);

$('#submit').on('click', function (event) {
  // remove previous html

  // set input values to variables
  title = $('#NPU').val();
  date = $('#date').val();

  // use getMeeting function to get meeting info
  getMeeting(title);

  // check which form boxes are selected
  if ($('#draft')[0].checked) {
    console.log('Draft');
    $('#textZone').append('<div class="card text-white bg-secondary mb-3" style="max-width: 40rem;"><div class="card-header">Draft</div><div class="card-body"><h5 class="card-title">' + $('#NPU').val() + '</h5><p class="card-text">' + $('#date').val() + '</p></div></div>');
  };
  if ($('#final')[0].checked) { $('#textZone').append('<div class="card text-white bg-secondary mb-3"><h2><a href="mailto:npu-' + title + '?subject=' + date + 'Final meeting agenda&cc=dvasquez@atlantaga.gov; kdunlap@atlantaga.gov&body=Good day + $(meeting.chairHon} + and NPU-' + $('#NPU').val() + ',%0D%0DPlease see the attached Final version of the NPU-' + $('#NPU').val() + $('#date').val() + 'meeting agenda.%0D%0DThank you,">FINAL</a></h2>' + '<p onclick="copy(this)">' + date + ' Final meeting agenda<br></br>Good day ${meeting.chairHon} and NPU-' + $('#NPU').val() + ',<br></br>Please see the attached Final version of the NPU-' + title + ' ' + date + ' ${meeting.date} meeting agenda.<br></br>Thank you,</p>');
    console.log('Final');
  };
  if ($('#distro')[0].checked) {
    console.log('Distro');
  };
  if ($('#access')[0].checked) {
    console.log('Access');
  }
  if ($('#approved')[0].checked) {
    console.log('Approved');
  }
  if ($('#nextdoor')[0].checked) {
    console.log('Nextdoor');
  }
});


function getMeeting(title) {
  switch(title) {
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
          plannerE  = `colteanu@atlantaga.gov`
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
Object.assign(meeting,{meet:meet,chair:chair,planner:planner,time:time,chairE:chairE,plannerE:plannerE,zURL:zURL,chairHon:chairHon});
return meeting;
};