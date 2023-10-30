const password_checker = document.querySelector(".password_checker");
const password = document.querySelector("#password");
const progress_bar = document.querySelector(".bar");

password.onkeyup = () => {
  console.log(password.value);
  checkPasswordStrength(password.value);
};
function checkPasswordStrength(password) {
  let strength = 0;

  if (password.match(/(?=.*[A-Z])/)) strength++;

  if (password.match(/(?=.*[a-z])/)) strength++;

  if (password.match(/(?=.*[0-9])/)) strength++;

  if (password.match(/(?=.*[`!@#$%^&*])/)) strength++;

  if (password.match(/(?=.{9,})/)) strength++;

  console.log(strength);

  switch (strength) {
    case 1:
      progress_bar.style.cssText = `width : ${
        (strength / 5) * 100
      }%; background-color : white `;
      break;
    case 2:
      progress_bar.style.cssText = `width : ${
        (strength / 5) * 100
      }%; background-color : orange `;
      break;
    case 3:
      progress_bar.style.cssText = `width : ${
        (strength / 5) * 100
      }%; background-color : gold `;
      break;
    case 4:
      progress_bar.style.cssText = `width : ${
        (strength / 5) * 100
      }%; background-color : deepskyblue `;
      break;
    case 5:
      progress_bar.style.cssText = `width : ${
        (strength / 5) * 100
      }%; background-color : lime `;
      break;
  }
}
