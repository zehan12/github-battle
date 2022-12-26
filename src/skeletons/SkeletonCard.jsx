import Shimmer from "./Shimmer"
import SkeletonElement from "./SkeletonElement"

const SkeletonCard = () => {
    return (<div className="skeleton skeleton-wrapper w-80 flex flex-col justify-center"
    style={{ flex: " flex: 0 1 30%" }}>
        <div className="flex flex-col items-center">
            <SkeletonElement type="i" />
            <SkeletonElement type="box" />
            <SkeletonElement type="title" />
        </div>
        <div className="flex flex-col ml-4">
                <div className="flex items-center">
                    <SkeletonElement type="fig" />
                    <SkeletonElement type="para" />
                </div>
                <div className="flex items-center">
                    <SkeletonElement type="fig" />
                    <SkeletonElement type="para" />
                </div>
                <div className="flex items-center">
                    <SkeletonElement type="fig" />
                    <SkeletonElement type="para" />
                </div>
                <div className="flex items-center">
                    <SkeletonElement type="fig" />
                    <SkeletonElement type="para" />
                </div>
                <div className="flex items-center">
                    <SkeletonElement type="fig" />
                    <SkeletonElement type="para" />
                </div>
            </div>
            <Shimmer />
    </div>)
}

export default SkeletonCard