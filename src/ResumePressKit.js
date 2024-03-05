const Resume = () => {
  return (
    <div className="w-full h-screen p-0 m-0 bg-cover bg-center" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/04/20/77/27/240_F_420772734_EUQv6soEJ0dZ2bcug8frDt73Pk4yXUbb.jpg')`, backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vRq9NkS_2CVUkfdyE9Bs2UbnB_-I3mmUnyiiRHLd_S6S7N-lG71I4F_UEG1lMSuHCCl5WwLhBEb-8CC/pub"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title="My Resume"
        allowFullScreen>
      </iframe>
    </div>
  );
};

export default Resume;
