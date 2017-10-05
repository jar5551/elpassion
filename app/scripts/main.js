/**
 * Created by jarek on 01/04/2017.
 */

import jQuery from 'jquery';

const $ = jQuery;
window.jQuery = window.$ = $;

class Main {
  constructor(mainEl) {
    this.mainEl = mainEl;
    this.content = [
      {
        date: '19-07-2016',
        issues: [
          {
            name: 'Page changes',
            star: true
          },
          {
            name: 'Review of last issues',
            star: true
          },
        ]
      },
      {
        date: '18-07-2016',
        issues: [
          {
            name: 'Visual UI Update Review',
            star: false
          },
          {
            name: 'Sidebar changes',
            star: false
          },
        ]
      },
      {
        date: '15-07-2016',
        issues: [
          {
            name: 'Crash upadate',
            star: false
          },
          {
            name: 'Page visual UI Update Review',
            star: true
          },
          {
            name: 'Sidebar update',
            star: false
          },
        ]
      },
      {
        date: '14-07-2016',
        issues: [
          {
            name: 'Crash issue',
            star: true
          },
          {
            name: 'Visual update & Crash resolve',
            star: true
          }
        ]
      }
    ]
  }

  insertContent() {
    for (let section of this.content) {
      let sectionDiv = $(`
        <section>
          <header>
            ${section.date}
          </header>
        </section>
      `);

      for (let issue of section.issues) {
        sectionDiv.append(
          `<article>
          ${issue.name}
          <button class="btn btn-star${issue.star ? ' active' : ''}">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="17" height="16" viewBox="0 0 17 16">
              <path d="M8.500,0.000 L11.301,5.028 L16.999,6.112 L13.033,10.302 L13.753,16.000 L8.500,13.561 L3.247,16.000 L3.967,10.302 L0.001,6.112 L5.699,5.028 L8.500,0.000 " class="cls-1"/>
            </svg>
          </button>
        </article>`
        )
      }

      $('#issues').append(sectionDiv);
    }
  }

  show() {
    this.mainEl.show();
    this.mainEl.addClass('animated zoomIn');
  }
}


$(document).ready(() => {
  const main = new Main($('#main'));
  main.insertContent();

  setTimeout(() => {
    main.show();
  }, 1000);

  $('#mainNav .btn').on('click', function () {
    $('#mainNav .btn').removeClass('active');
    $(this).addClass('active');
  });

  $('.btn-star').on('click', function () {
    let el = $(this);

    if(el.hasClass('active')) {
      return el.removeClass('active');
    }

    el.addClass('active');
  })
});
