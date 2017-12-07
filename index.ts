import { VideoComparer } from "./video-comparer";
import { resolve } from "path";
const storage = "E:\\Work\\tns-work\\video-processing";
const tempFolder = `${storage}\\temp`;
const fullVideoName = "https://media.w3.org/2010/05/sintel/trailer.mp4";
const videoComparer: VideoComparer = new VideoComparer(fullVideoName);

async function test() {
    await videoComparer.processVideo(tempFolder);
    let result = await videoComparer.compareImageFromVideo(resolve(storage, "test55.png"), 50, 55);
    return result;
}

test();