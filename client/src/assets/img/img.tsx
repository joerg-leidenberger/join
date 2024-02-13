import add_task from './add_task.svg';
import board from './board.svg';
import calendar from './calendar.svg';
import help from './help.svg';
import logo from './logo.svg';
import summary from './summary.svg';
import backlog from './backlog.png';
import boardsummery from './boardsummery.png';
import done from './done.png';
import feedback from './feedback.png';
import progress from './progress.png';
import todo from './todo.png';
import urgent from './urgent.png';
import addContact from './person_add.svg';
import eventIcon from './event.svg';
import prioalta from './prioalta.svg';
import priomedia from './priomedia.svg';
import priobaja from './priobaja.svg';
import arrowDropDown from './arrow_drop_down.svg';
import checkButton from './checkbutton.svg';
import checkButtonChecked from './checkbutton-checked.svg';
import lockIcon from './lock.svg';
import mailIcon from './mail.svg';
import personIcon from './person.svg';
import visibilityOffIcon from './visibility_off.svg';
import visibilityIcon from './visibility.svg';

const maskStyle: React.CSSProperties = {
  maskType: 'alpha',
};

const closeSVG = () => {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.9995 8.40005L2.0995 13.3C1.91617 13.4834 1.68283 13.575 1.3995 13.575C1.11617 13.575 0.882833 13.4834 0.6995 13.3C0.516166 13.1167 0.4245 12.8834 0.4245 12.6C0.4245 12.3167 0.516166 12.0834 0.6995 11.9L5.5995 7.00005L0.6995 2.10005C0.516166 1.91672 0.4245 1.68338 0.4245 1.40005C0.4245 1.11672 0.516166 0.883382 0.6995 0.700049C0.882833 0.516715 1.11617 0.425049 1.3995 0.425049C1.68283 0.425049 1.91617 0.516715 2.0995 0.700049L6.9995 5.60005L11.8995 0.700049C12.0828 0.516715 12.3162 0.425049 12.5995 0.425049C12.8828 0.425049 13.1162 0.516715 13.2995 0.700049C13.4828 0.883382 13.5745 1.11672 13.5745 1.40005C13.5745 1.68338 13.4828 1.91672 13.2995 2.10005L8.3995 7.00005L13.2995 11.9C13.4828 12.0834 13.5745 12.3167 13.5745 12.6C13.5745 12.8834 13.4828 13.1167 13.2995 13.3C13.1162 13.4834 12.8828 13.575 12.5995 13.575C12.3162 13.575 12.0828 13.4834 11.8995 13.3L6.9995 8.40005Z'
        fill='#4589FF'
      />
    </svg>
  );
};

const addSVG = () => {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.99951 8H0.999512C0.716178 8 0.478678 7.90417 0.287012 7.7125C0.0953451 7.52083 -0.000488281 7.28333 -0.000488281 7C-0.000488281 6.71667 0.0953451 6.47917 0.287012 6.2875C0.478678 6.09583 0.716178 6 0.999512 6H5.99951V1C5.99951 0.716667 6.09535 0.479167 6.28701 0.2875C6.47868 0.0958333 6.71618 0 6.99951 0C7.28285 0 7.52035 0.0958333 7.71201 0.2875C7.90368 0.479167 7.99951 0.716667 7.99951 1V6H12.9995C13.2828 6 13.5203 6.09583 13.712 6.2875C13.9037 6.47917 13.9995 6.71667 13.9995 7C13.9995 7.28333 13.9037 7.52083 13.712 7.7125C13.5203 7.90417 13.2828 8 12.9995 8H7.99951V13C7.99951 13.2833 7.90368 13.5208 7.71201 13.7125C7.52035 13.9042 7.28285 14 6.99951 14C6.71618 14 6.47868 13.9042 6.28701 13.7125C6.09535 13.5208 5.99951 13.2833 5.99951 13V8Z'
        fill='#4589FF'
      />
    </svg>
  );
};

const checkSVG = () => {
  return (
    <svg
      width='16'
      height='12'
      viewBox='0 0 16 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.54954 9.15L14.0245 0.675C14.2245 0.475 14.462 0.375 14.737 0.375C15.012 0.375 15.2495 0.475 15.4495 0.675C15.6495 0.875 15.7495 1.1125 15.7495 1.3875C15.7495 1.6625 15.6495 1.9 15.4495 2.1L6.24954 11.3C6.04954 11.5 5.8162 11.6 5.54954 11.6C5.28287 11.6 5.04954 11.5 4.84954 11.3L0.549536 7C0.349536 6.8 0.253702 6.5625 0.262036 6.2875C0.270369 6.0125 0.374536 5.775 0.574536 5.575C0.774536 5.375 1.01204 5.275 1.28704 5.275C1.56204 5.275 1.79954 5.375 1.99954 5.575L5.54954 9.15Z'
        fill='#4589FF'
      />
    </svg>
  );
};

const deleteSVG = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_33979_2698'
        style={maskStyle}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_33979_2698)'>
        <path
          d='M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM7 6V19H17V6H7ZM9 16C9 16.2833 9.09583 16.5208 9.2875 16.7125C9.47917 16.9042 9.71667 17 10 17C10.2833 17 10.5208 16.9042 10.7125 16.7125C10.9042 16.5208 11 16.2833 11 16V9C11 8.71667 10.9042 8.47917 10.7125 8.2875C10.5208 8.09583 10.2833 8 10 8C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V16ZM13 16C13 16.2833 13.0958 16.5208 13.2875 16.7125C13.4792 16.9042 13.7167 17 14 17C14.2833 17 14.5208 16.9042 14.7125 16.7125C14.9042 16.5208 15 16.2833 15 16V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8C13.7167 8 13.4792 8.09583 13.2875 8.2875C13.0958 8.47917 13 8.71667 13 9V16Z'
          fill='#4589FF'
        />
      </g>
    </svg>
  );
};

const editSVG = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_33979_3154'
        style={maskStyle}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_33979_3154)'>
        <path
          d='M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z'
          fill='#4589FF'
        />
      </g>
    </svg>
  );
};

const searchSVG = () => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.71181 13.2137C4.89463 13.2137 3.35669 12.5843 2.098 11.3256C0.839307 10.0669 0.209961 8.52899 0.209961 6.71181C0.209961 4.89463 0.839307 3.35669 2.098 2.098C3.35669 0.839307 4.89463 0.209961 6.71181 0.209961C8.52899 0.209961 10.0669 0.839307 11.3256 2.098C12.5843 3.35669 13.2137 4.89463 13.2137 6.71181C13.2137 7.44535 13.097 8.13721 12.8636 8.7874C12.6302 9.43758 12.3134 10.0127 11.9133 10.5129L17.5149 16.1145C17.6983 16.2979 17.79 16.5313 17.79 16.8147C17.79 17.0981 17.6983 17.3315 17.5149 17.5149C17.3315 17.6983 17.0981 17.79 16.8147 17.79C16.5313 17.79 16.2979 17.6983 16.1145 17.5149L10.5129 11.9133C10.0127 12.3134 9.43758 12.6302 8.7874 12.8636C8.13721 13.097 7.44535 13.2137 6.71181 13.2137ZM6.71181 11.2131C7.96217 11.2131 9.02497 10.7755 9.90022 9.90022C10.7755 9.02497 11.2131 7.96217 11.2131 6.71181C11.2131 5.46145 10.7755 4.39865 9.90022 3.5234C9.02497 2.64815 7.96217 2.21053 6.71181 2.21053C5.46145 2.21053 4.39865 2.64815 3.5234 3.5234C2.64815 4.39865 2.21053 5.46145 2.21053 6.71181C2.21053 7.96217 2.64815 9.02497 3.5234 9.90022C4.39865 10.7755 5.46145 11.2131 6.71181 11.2131Z'
        fill='#42526E'
      />
    </svg>
  );
};

const plusButtonSVG = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='1'
        width='22'
        height='22'
        rx='7'
        stroke='#4589FF'
        strokeWidth='2'
      />
      <path
        d='M12 8V16'
        stroke='#4589FF'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M16 12.0752L8 12.0752'
        stroke='#4589FF'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

const joinSVG = () => {
  return (
    <svg
      width='101'
      height='122'
      viewBox='0 0 101 122'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M71.6721 0H49.5143V25.4923H71.6721V0Z' fill='#4589FF' />
      <path
        d='M49.5142 46.2251H71.6721V82.1779C71.7733 90.8292 69.3112 99.3153 64.5986 106.557C59.9455 113.594 50.963 121.966 34.3446 121.966C16.2434 121.966 5.69286 113.406 0 108.715L13.9765 91.4743C19.533 96.0112 24.885 99.7435 34.4299 99.7435C41.6567 99.7435 44.5372 96.7988 46.2247 94.2307C48.5186 90.6637 49.7052 86.4923 49.6335 82.2464L49.5142 46.2251Z'
        fill='#4589FF'
      />
      <path
        d='M38.2137 30.1318H16.0559V52.3884H38.2137V30.1318Z'
        fill='#4589FF'
      />
      <path
        d='M83.2793 111.522C83.2793 116.265 80.8761 118.815 77.5183 118.815C74.1605 118.815 71.9618 115.785 71.9618 111.762C71.9618 107.739 74.2287 104.554 77.7058 104.554C81.1829 104.554 83.2793 107.687 83.2793 111.522ZM74.5355 111.711C74.5355 114.57 75.6775 116.675 77.6376 116.675C79.5977 116.675 80.7056 114.45 80.7056 111.539C80.7056 108.988 79.6829 106.592 77.6376 106.592C75.5923 106.592 74.5355 108.903 74.5355 111.711Z'
        fill='#4589FF'
      />
      <path
        d='M87.6768 104.76V118.593H85.2224V104.76H87.6768Z'
        fill='#4589FF'
      />
      <path
        d='M90.3358 118.593V104.76H93.0629L95.9946 110.461C96.7493 111.952 97.4207 113.483 98.0058 115.049C97.8524 113.337 97.7843 111.368 97.7843 109.177V104.76H100.034V118.593H97.4945L94.5288 112.772C93.7436 111.243 93.0437 109.671 92.4323 108.064C92.4323 109.776 92.5516 111.711 92.5516 114.09V118.576L90.3358 118.593Z'
        fill='#4589FF'
      />
    </svg>
  );
};

const arrowLeftSVG = () => {
  return (
    <svg
      width='22'
      height='20'
      viewBox='0 0 22 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.93725 8.66673H19.8333C20.5696 8.66673 21.1666 9.26368 21.1666 10.0001C21.1666 10.7364 20.5696 11.3334 19.8333 11.3334H4.93725L11.1466 17.5427C11.6672 18.0634 11.6672 18.9074 11.1466 19.4281C10.626 19.9487 9.78187 19.9487 9.26125 19.4281L1.24746 11.4143C0.466415 10.6332 0.466417 9.3669 1.24747 8.58585L9.26125 0.57206C9.78187 0.0514398 10.626 0.0514406 11.1466 0.572061C11.6672 1.09268 11.6672 1.93677 11.1466 2.45739L4.93725 8.66673Z'
        fill='#005DFF'
      />
    </svg>
  );
};

const cancelSVG = () => {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.0008 12.5001L17.2438 17.7431M6.75781 17.7431L12.0008 12.5001L6.75781 17.7431ZM17.2438 7.25708L11.9998 12.5001L17.2438 7.25708ZM11.9998 12.5001L6.75781 7.25708L11.9998 12.5001Z'
        stroke='#4589FF'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

const mediumSVG = () => {
  return (
    <svg
      width='18'
      height='8'
      viewBox='0 0 18 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_454_3232)'>
        <path
          d='M16.2902 7.06343H1.15319C0.906136 7.06343 0.669203 6.96458 0.494512 6.78862C0.31982 6.61266 0.22168 6.37401 0.22168 6.12516C0.22168 5.87632 0.31982 5.63766 0.494512 5.4617C0.669203 5.28574 0.906136 5.18689 1.15319 5.18689H16.2902C16.5372 5.18689 16.7742 5.28574 16.9488 5.4617C17.1235 5.63766 17.2217 5.87632 17.2217 6.12516C17.2217 6.37401 17.1235 6.61266 16.9488 6.78862C16.7742 6.96458 16.5372 7.06343 16.2902 7.06343Z'
          fill='#FF7A00'
        />
        <path
          d='M16.2902 2.60665H1.15319C0.906136 2.60665 0.669203 2.50779 0.494512 2.33183C0.31982 2.15587 0.22168 1.91722 0.22168 1.66837C0.22168 1.41953 0.31982 1.18088 0.494512 1.00492C0.669203 0.828956 0.906136 0.730103 1.15319 0.730103H16.2902C16.5372 0.730103 16.7742 0.828956 16.9488 1.00492C17.1235 1.18088 17.2217 1.41953 17.2217 1.66837C17.2217 1.91722 17.1235 2.15587 16.9488 2.33183C16.7742 2.50779 16.5372 2.60665 16.2902 2.60665Z'
          fill='#FF7A00'
        />
      </g>
      <defs>
        <clipPath id='clip0_454_3232'>
          <rect
            width='17'
            height='6.33333'
            fill='white'
            transform='translate(0.22168 0.730103)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const lowSVG = () => {
  return (
    <svg
      width='18'
      height='13'
      viewBox='0 0 18 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_454_3240)'>
        <path
          d='M8.72151 8.14184C8.52208 8.14218 8.3278 8.08027 8.16726 7.96524L0.598769 2.53128C0.500296 2.46051 0.417122 2.37158 0.353998 2.26957C0.290874 2.16755 0.249035 2.05444 0.230871 1.93671C0.194186 1.69892 0.256157 1.45671 0.403153 1.26335C0.550148 1.07 0.770126 0.941331 1.01469 0.905664C1.25926 0.869997 1.50839 0.930249 1.70726 1.07317L8.72151 6.10411L15.7358 1.07317C15.8342 1.0024 15.9461 0.951186 16.0649 0.922446C16.1837 0.893707 16.3072 0.888004 16.4283 0.905665C16.5494 0.923325 16.6658 0.964003 16.7707 1.02538C16.8756 1.08675 16.9671 1.16761 17.0399 1.26335C17.1126 1.3591 17.1653 1.46784 17.1949 1.58337C17.2244 1.69891 17.2303 1.81897 17.2121 1.93671C17.194 2.05444 17.1521 2.16755 17.089 2.26957C17.0259 2.37158 16.9427 2.46051 16.8442 2.53128L9.27576 7.96524C9.11522 8.08027 8.92094 8.14218 8.72151 8.14184Z'
          fill='#02CF2F'
        />
        <path
          d='M8.72168 12.8967C8.52225 12.8971 8.32797 12.8352 8.16743 12.7201L0.598937 7.28616C0.400061 7.14324 0.267724 6.92937 0.231039 6.69159C0.194353 6.45381 0.256325 6.21159 0.40332 6.01824C0.550316 5.82488 0.770294 5.69621 1.01486 5.66055C1.25943 5.62488 1.50855 5.68513 1.70743 5.82805L8.72168 10.859L15.7359 5.82805C15.9348 5.68513 16.1839 5.62488 16.4285 5.66055C16.6731 5.69621 16.893 5.82488 17.04 6.01824C17.187 6.2116 17.249 6.45381 17.2123 6.69159C17.1756 6.92937 17.0433 7.14325 16.8444 7.28616L9.27592 12.7201C9.11538 12.8352 8.92111 12.8971 8.72168 12.8967Z'
          fill='#02CF2F'
        />
      </g>
      <defs>
        <clipPath id='clip0_454_3240'>
          <rect
            width='17'
            height='12'
            fill='white'
            transform='translate(0.22168 0.896729)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const urgentSVG = () => {
  return (
    <svg
      width='18'
      height='13'
      viewBox='0 0 18 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_454_3247)'>
        <path
          d='M8.72185 5.65161C8.92128 5.65128 9.11556 5.71318 9.2761 5.82822L16.8446 11.2622C16.9431 11.3329 17.0262 11.4219 17.0894 11.5239C17.1525 11.6259 17.1943 11.739 17.2125 11.8568C17.2492 12.0945 17.1872 12.3367 17.0402 12.5301C16.8932 12.7235 16.6732 12.8521 16.4287 12.8878C16.1841 12.9235 15.935 12.8632 15.7361 12.7203L8.72185 7.68935L1.7076 12.7203C1.60913 12.7911 1.49728 12.8423 1.37845 12.871C1.25962 12.8998 1.13613 12.9055 1.01504 12.8878C0.893936 12.8701 0.777603 12.8295 0.672676 12.7681C0.567747 12.7067 0.476279 12.6258 0.403494 12.5301C0.33071 12.4344 0.278033 12.3256 0.248473 12.2101C0.218913 12.0946 0.213048 11.9745 0.231211 11.8567C0.249377 11.739 0.291215 11.6259 0.35434 11.5239C0.417464 11.4219 0.500638 11.3329 0.599112 11.2622L8.1676 5.82822C8.32814 5.71318 8.52242 5.65128 8.72185 5.65161Z'
          fill='#FF0000'
        />
        <path
          d='M8.72168 0.896729C8.92111 0.896395 9.11539 0.958298 9.27593 1.07333L16.8444 6.5073C17.0433 6.65021 17.1756 6.86409 17.2123 7.10187C17.249 7.33965 17.187 7.58186 17.04 7.77522C16.893 7.96858 16.6731 8.09724 16.4285 8.13291C16.1839 8.16858 15.9348 8.10833 15.7359 7.96541L8.72168 2.93446L1.70744 7.96541C1.50856 8.10832 1.25943 8.16858 1.01487 8.13291C0.770298 8.09724 0.550322 7.96858 0.403326 7.77522C0.256331 7.58186 0.194359 7.33965 0.231043 7.10187C0.267729 6.86409 0.400067 6.65021 0.598944 6.50729L8.16744 1.07333C8.32798 0.958298 8.52225 0.896395 8.72168 0.896729Z'
          fill='#FF0000'
        />
      </g>
      <defs>
        <clipPath id='clip0_454_3247'>
          <rect
            width='17'
            height='12'
            fill='white'
            transform='translate(17.2217 12.8967) rotate(-180)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export {
  add_task,
  board,
  calendar,
  help,
  logo,
  summary,
  backlog,
  boardsummery,
  done,
  feedback,
  progress,
  todo,
  urgent,
  addContact,
  eventIcon,
  prioalta,
  priomedia,
  priobaja,
  arrowDropDown,
  checkButton,
  checkButtonChecked,
  closeSVG,
  addSVG,
  checkSVG,
  editSVG,
  deleteSVG,
  searchSVG,
  plusButtonSVG,
  joinSVG,
  lockIcon,
  mailIcon,
  personIcon,
  visibilityOffIcon,
  visibilityIcon,
  arrowLeftSVG,
  cancelSVG,
  lowSVG,
  mediumSVG,
  urgentSVG,
};
