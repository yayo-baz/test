import pdf from './el-rey-del-cash.pdf';

function App() {
    return (
        <>
            <div className="container">
                <div className="h_iframe">
                    <iframe src={pdf} frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
        </>
    );
}

export default App;
