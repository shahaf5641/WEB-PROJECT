// src/contexts/style.js


//------------BLOCKS------------
export const blockDetailsContainerStyle = `
  shadow-xl rounded-2xl p-6 mb-4 border-2 backdrop-blur-md text-2xl font-semibold text-left
`;

export const blockRowStyle = `
  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 border-2 rounded-xl 
  text-lg font-semibold transform transition-transform duration-300 hover:scale-105
`;

export const blocksTableHeaderStyle = (darkMode) => `
  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 
  ${darkMode ? 'bg-gray-600' : 'bg-gray-200 border'} 
  p-4 rounded-md text-xl font-semibold
`;


//------------CONTACT------------

export const contactButtonStyle = (darkMode) => `
  mt-4 cursor-pointer transition-all font-semibold px-14 text-lg py-4 rounded-full border-b-[4px] 
  ${darkMode ?
        'bg-gray-700 text-gray-200 border-indigo-600 hover:shadow-indigo-400 shadow-indigo-400' :
        'bg-white text-gray-700 border-gray-600 hover:shadow-gray-300 shadow-gray-300'
    } 
  hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] 
  active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
  hover:shadow-xl active:shadow-none
`;

export const inputFieldStyle = (darkMode) => `
  mt-1 rounded-2xl transition ease-in-out duration-300 cursor-pointer w-full block px-4 py-3 
  ${darkMode ? 'bg-gray-500 text-white focus:border-indigo-700' : 'bg-white text-black focus:border-gray-500'} 
  border border-gray-300 rounded-md shadow-sm focus:outline-none text-lg
`;

export const textAreaStyle = (darkMode) => `
  mt-1 rounded-2xl transition ease-in-out duration-300 cursor-pointer w-full block px-4 py-3 
  ${darkMode ? 'bg-gray-500 text-white focus:border-indigo-700' : 'bg-white text-black focus:border-gray-400'} 
  border border-gray-300 rounded-md shadow-sm focus:outline-none text-lg
`;

export const thankYouMessageContainerStyle = `
  backdrop-blur-md border text-center text-3xl font-semibold p-6 rounded-xl max-w-4xl
`;


//------------CONTEXTS------------


export const paginationButtonStyle = `
  px-8 py-4 border-2 rounded-2xl font-bold shadow-xl transform transition-transform duration-100 active:scale-95
`;

//----DARKMODE----

// Style for the toggle switch
export const toggleSwitchStyle = `
  relative w-[110px] h-[50px] bg-white peer-checked:bg-gray-500 rounded-full 
  after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r from-blue-500 to-gray-200 
  peer-checked:after:from-indigo-800 peer-checked:after:to-gray-900 after:rounded-full after:top-[5px] 
  after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] 
  shadow-sm duration-300 after:duration-300 after:shadow-md
`;

// Styles for the sun and moon SVG icons
export const sunIconStyle = `
  fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px]
`;

export const moonIconStyle = `
  fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px]
`;

export const sunIconPath = `
  M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z
`;

export const moonIconPath = `
  M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z
`;


//----NOTFOUND----

export const NotFoundButton = (darkMode) =>
    `text-xl marker:mt-6 px-6 py-3 ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-500 hover:bg-blue-600'
    } rounded-full transition duration-500`;





//------------DASHBOARD------------

export const paginatedButtonStyle = (darkMode) => `
pl-6 text-center w-72 rounded-full h-12 relative text-lg font-semibold ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}
`;

export const paginatedDivStyle = (darkMode) => `
rounded-full h-10 w-1/6 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[280px] z-10 duration-700 ${darkMode ? 'bg-indigo-600' : 'bg-gray-400'}
`;


//------------DETAILS------------


//----ACCOUNTDETAILS----

export const accountDetailsSectionStyle = `
  shadow-xl rounded-2xl p-6 mb-4 border-2 backdrop-blur-md text-2xl font-base text-left
`;

//----TOKENDETAILS----

export const tokenContainerStyle = (darkMode) =>
    `container mx-auto shadow-xl rounded-2xl p-6 mb-4 border-2 backdrop-blur-md text-2xl font-base text-left ${darkMode ? 'text-gray-100' : 'text-gray-900'}`;

export const tokenImgStyle = 'top-32 w-20 h-20 sm:top-24 sm:w-22 sm:h-22 md:top-16 absolute left-3/4';

export const tokenButtonStyle = (darkMode) =>
    `w-auto items-center justify-center flex rounded-full border-2 duration-500 cursor-pointer active:scale-95 ${darkMode ? 'border-indigo-600 shadow-lg hover:bg-indigo-600 text-gray-100 hover:text-black' : 'border-blue-900 shadow-lg hover:bg-blue-900 text-gray-900 hover:text-gray-100'}`;



//------------HOME------------

//----CRYPTOCARD----


export const cryptoCardInner = `
relative xs:w-80 xs:h-80 w-60 h-60 duration-700 transform-style preserve-3d group-hover:rotate-y-180
`;

export const cryptoCardFront = (darkMode) => `
absolute inset-0 w-full h-full ${darkMode ? 'bg-slate-800' : 'bg-gray-200'} 
border-2 border-coral rounded-xl shadow-xl backface-hidden
`;

export const cryptoCardBack = `
absolute inset-0 w-full h-full bg-coral border-2 border-coral 
rounded-xl shadow-xl transform rotate-y-180 backface-hidden backdrop-blur-sm
`;

export const cryptoCardImage = 'xs:w-20 xs:h-20 w-14 h-14 mb-4';

export const cryptoCardTitle = (darkMode) => `
text-3xl font-bold ${darkMode ? 'text-indigo-600' : 'text-blue-800'}
`;

export const cryptoCardDescription = 'xs:text-xl text-md font-semibold';

export const moreDetailsButton = (darkMode) => `
mt-4 group/button relative inline-flex items-center justify-center overflow-hidden 
rounded-full px-4 py-2 text-base xs:text-lg font-semibold tracking-wider transition-all 
duration-300 ease-in-out hover:gap-2 hover:translate-x-3 
${darkMode ? 'text-gray-200 bg-indigo-600' : 'text-gray-900 bg-blue-500'}
`;

export const svgIconStyle = 'w-5 h-5 ml-2';

export const svgPathStyle = `
M6 12L3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5
`;

export const svgContainerStyle = `
stroke="currentColor" 
strokeWidth="1.5" 
viewBox="0 0 24 24" 
fill="none" 
xmlns="http://www.w3.org/2000/svg"
`;


//----CRYPTOGRID----


export const cryptoGridContainer = `
  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-12
`;


//----HEROSECTION----


export const heroLogoContainer = (darkMode) => `
  relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mb-6 rounded-full overflow-hidden 
  ${darkMode ? 'shadow-gray-400' : 'shadow-yellow-100'} shadow-md transition-transform transform 
  hover:scale-105 flex flex-col items-center text-center
`;

export const heroLogoImage = `
  w-full h-full object-cover transform scale-125
`;

export const heroHeading = `
  text-4xl sm:text-5xl md:text-6xl font-bold text-white
`;

export const heroDescription = `
  text-xl sm:text-2xl mt-4 text-gray-200
`;

export const heroButton = (darkMode) => `
  tracking-wider group/button relative inline-flex items-center justify-center overflow-hidden 
  rounded-full border-4 text-lg sm:text-xl font-semibold mt-8 px-6 py-3 sm:px-8 sm:py-3 
  transition-transform duration-300 ease-in-out text-white active:scale-95 hover:scale-110 
  ${darkMode ? 'hover:bg-indigo-600 border-indigo-600' : 'hover:bg-blue-700 border-blue-700 backdrop-blur-md'}
`;

export const heroButtonHoverEffect = `
  absolute inset-0 flex h-full w-full justify-center 
  [transform:skew(-13deg)_translateX(-100%)] 
  group-hover/button:duration-1000 
  group-hover/button:[transform:skew(-13deg)_translateX(100%)]
`;

export const heroButtonHoverEffectInner = `
  relative h-full w-10 bg-white/30
`;


export const joinSectionHeading = `
  text-4xl font-bold mb-4 text-white
`;

export const joinSectionDescription = `
  text-xl text-gray-200 mb-8
`;


//------------TRANSCATIONS------------

//----TRANSACTIONDETAILS----

export const transactionDetailsContainer = `
  shadow-xl rounded-2xl p-6 mb-4 border-2 backdrop-blur-md text-2xl font-semibold text-left
`;

//----TRANSACTIONROW----

export const transactionRowContainer = `
  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 border-2 rounded-xl 
  text-lg font-semibold transform transition-transform duration-300 hover:scale-105
`;

//----TRANSACTIONTABLE----

export const transactionTableHeader = (darkMode) => `
  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 
  ${darkMode ? 'bg-gray-600' : 'bg-gray-200 border'} 
  p-4 rounded-md text-xl font-semibold
`;


//------------FOOTER------------

export const footerContainer = (darkMode) => `
  py-2 border-t border-white ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}
`;

export const footerText = (darkMode) => `
  text-center mt-2 text-xl ${darkMode ? 'text-gray-200' : 'text-gray-700'}
`;

export const footerLinkStyle = (darkMode) => `
  font-semibold text-2xl transform transition-transform duration-300 
  hover:scale-110 ${darkMode ? 'text-indigo-500' : 'text-blue-600'}
`;


//------------HEADER------------

//----HAMBURGER----


export const hamburgerIconStyle = `
  cursor-pointer w-9 h-9 transform transition-transform duration-200 hover:scale-105
`;

export const hamburgerMenuContainerStyle = `
  absolute top-11 w-30 bg-gray-400 rounded-xl shadow-lg z-50 px-1 left-1
`;

export const hamburgerMenuLinksContainerStyle = `
  flex flex-col font-semibold text-md text-black p-1
`;

export const hamburgerMenuLinkStyle = `
  p-[2px] transform transition-transform duration-300 hover:scale-110
`;

//----HEADER----

// Header main container style
export const headerStyle = `
  p-4 text-lg nav bg-opacity-90 border-b border-gray-100 shadow-2xl backdrop-blur-[10px] mb-32 sm:mb-0 xs:mb-12
`;

// Header content container style
export const headerContainerStyle = `
  mx-auto sm:flex justify-between items-center w-full
`;

// Style for the home icon in the header
export const homeIconStyle = `
  h-8 w-8 text-white transform transition-transform duration-200 hover:scale-110
`;

// Style for the search form
export const searchFormStyle = `
  relative flex items-center sm:ml-4 sm:mt-0 mt-4 px-2 w-full sm:w-96
`;

// Style for the search input field
export const searchInputStyle = (darkMode) => `
  block w-full p-3 text-lg border-2 rounded-full focus:outline-none transition ease-in-out duration-500 ${darkMode ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-indigo-500 focus:border-indigo-500' : 'border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500'}
`;

// Style for the search button
export const searchButtonStyle = (darkMode) => `
  items-center justify-center flex border-2 shadow-lg ${darkMode ? 'border-indigo-500 hover:bg-indigo-500 hover:text-black text-white shadow-indigo-800' : 'border-blue-500 hover:bg-blue-500 hover:text-white shadow-blue-300'} duration-300 cursor-pointer active:scale-95 absolute end-2.5 bottom-1/2 translate-y-1/2 p-2 text-sm font-medium rounded-full focus:ring-4 focus:outline-none
`;

// Define a single constant for the SVG attributes and path data
export const searchIconSVG = {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ariaHidden: "true",
    className: "w-4 h-4",
    pathData: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z",
    pathStyle: {
        strokeWidth: 2,
        strokeLinejoin: "round",
        strokeLinecap: "round",
        stroke: "currentColor"
    }
};


//----NAVLINK----

export const navLinkStyle = (darkMode, isActive) => `
    hidden md:flex font-bold relative group focus:outline-none py-1 transition duration-500 text-[17px] lg:text-[21px]
    ${isActive ? (darkMode ? 'text-indigo-500' : 'text-gray-700') : (darkMode ? 'text-gray-100' : 'text-gray-100')}
    ${darkMode ? 'hover:text-indigo-500' : 'hover:text-gray-700'}
  `;

export const navLinkSpanStyle = (darkMode, isActive) => `
    absolute bottom-0 left-0 h-0.5 ${darkMode ? 'bg-indigo-500' : 'bg-gray-700'} transition-all duration-700 ${isActive ? 'w-full' : 'w-0'} group-hover:w-full
  `;

export const navLinkTextStyle = (isActive) => `
    transition-transform transform ${isActive ? 'scale-110' : ''} group-hover:scale-110
  `;




//------------LAYOUT------------


export const layoutContainerStyle = (darkMode) => `
  flex flex-col min-h-screen font-serif ${darkMode ? 'text-gray-100' : 'text-gray-800'}
`;

export const layoutBackgroundStyle = (darkMode) => ({
  background: darkMode
    ? 'radial-gradient(circle, rgba(26,31,107,1) 0%, rgba(0,0,0,1) 100%)'
    : 'radial-gradient(circle, rgba(172,190,225,1) 0%, rgba(24,87,227,1) 100%)'
});

export const mainContentStyle = `
  flex-grow flex flex-col text-center
`;












