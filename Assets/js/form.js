const themeButtonEl = $('#theme-btn');

let isDark = true;

themeButtonEl.on('click', function () {
    if (isDark) {
      $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
      isDark = !isDark;
    } else {
      $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
      isDark = !isDark;
    }
  });
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    window.location.href = 'file:///C:/Users/nerdk/.vscode/UTA-VIRT-FSF-PT-03-2024-U-LOLC-2/04-Web-APIs/02-Challenge/Assets/blog.html';
  });

const UserNameEl = $('input[name="user-name"]');
const TitleEl = $('input[name="Title"]');
const ContentEl = $('input[name="content"]');


function handleFormSubmit(event) {
  event.preventDefault();

  console.log('username:', UserNameEl.val());
  console.log('Title:', TitleEl.val());
  console.log('Content:', ContentEl.val());



  $('input[type="username"]').val('');
  $('input[type="Title"]').val('');
  $('input[type="Content"]').val('');
formEl.on('submit', handleFormSubmit);
}
