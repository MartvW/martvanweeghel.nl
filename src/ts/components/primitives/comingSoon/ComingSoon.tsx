import comingSoonPNG from '@images/underConstruction.png';

const ComingSoon = () => (
    <div className="absolute top-0 left-0 flex justify-center items-center flex-col text-white gap-5 h-full w-full">
        <div className="w-44">
            <img src={comingSoonPNG} alt="Coming Soon" />
        </div>
        <div className="text-2xl font-semibold">
            <h1 className="text-4xl">Coming Soon</h1>
        </div>
        <p className="text-md">
            This page is under construction.
        </p>
    </div>
);

export default ComingSoon; 