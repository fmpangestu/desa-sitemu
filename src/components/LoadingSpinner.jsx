// components/LoadingSpinner.jsx
function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center h-screen">
            <button className="btn btn-lg">
                <span className="loading loading-spinner"></span>
                Loading...
            </button>
        </div>
    );
}

export default LoadingSpinner;
