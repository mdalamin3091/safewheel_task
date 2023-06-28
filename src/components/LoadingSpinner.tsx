const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="relative">
                <div className="absolute top-0 w-5 h-5 bg-white rounded-full animate-bounce"></div>
                <div className="absolute top-0 w-5 h-5 bg-white rounded-full animate-bounce" style={{ left: '1.75rem', animationDelay: '0.2s' }}></div>
                <div className="absolute top-0 w-5 h-5 bg-white rounded-full animate-bounce" style={{ left: '3.5rem', animationDelay: '0.4s' }}></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;