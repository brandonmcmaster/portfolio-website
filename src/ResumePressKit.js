const Resume = () => {
  return (
    <div className="container mx-auto bg-cover bg-center text-white p-20" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/04/20/77/27/240_F_420772734_EUQv6soEJ0dZ2bcug8frDt73Pk4yXUbb.jpg')`, backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="border-2 border-gray-200 rounded-lg p-10" style={{ backdropFilter: 'blur(20px)' }}>
        <h2 className="text-2xl font-bold mb-4 text-center">My Resume</h2>
        <div className="iframe-container" style={{ overflow: 'hidden', position: 'relative', paddingTop: '75%' }}>
          <iframe 
            src="https://docs.google.com/document/d/e/2PACX-1vRq9NkS_2CVUkfdyE9Bs2UbnB_-I3mmUnyiiRHLd_S6S7N-lG71I4F_UEG1lMSuHCCl5WwLhBEb-8CC/pub" 
            style={{ 
              position: 'absolute',
              top: '-100px', // Increase this value to hide the top bar more
              left: 0,
              width: '100%',
              height: 'calc(100% + 100px)', // Increase height to compensate for the shifted content
              border: 'none' 
            }} 
            title="My Resume" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Resume;
