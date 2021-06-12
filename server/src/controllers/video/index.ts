import { Response, Request } from 'express';
import IVideo from '../../types/video';
import Video from '../../models/video';
// import { isTryStatement } from 'typescript';



export const getVideo = async (req: Request, res: Response): Promise<void> => {
    try {
        const videos: IVideo[] = await Video.find()
        res.status(202).json({ videos })
    } catch (error) {
        console.log(error)
    }
}

export const addVideo = async (req: Request, res: Response): Promise<void> => {
    try {
        // res.status(203).json({"name":"kota"})
        // const blog = await Video.create(req.body)
        let body = req.body as Pick<IVideo, "title" | "description" | "content" | "createdAt" | "authorId" | "chapterId" | "courseId" | "tags" | "userId">
        console.log(body)
        const video: IVideo = new Video({
            title: body.title,
            description: body.description,
            content: body.content,
            createdAt: body.createdAt,
            authorId: body.authorId,
            chapterId: body.chapterId,
            courseId: body.courseId,
            tags: body.tags
        })

        console.log(video)
        const newBlog: IVideo = await video.save();
        const allBlogs: IVideo[] = await Video.find()

        res.status(203).json({ message: "new Video as been added ", blog: newBlog, blogs: allBlogs })
    } catch (error) {
        res.end()
        console.log(error)
    }
}


export const updateVideo = async (req: Request, res: Response): Promise<void> => {
    try {

        const { params: { id }, body } = req;
        console.log(body, id)
        const updatedVideo: IVideo | null = await Video.findByIdAndUpdate({ _id: id }, body)
        // res.status(205).json({testing:"testing",blog: updatedBlog})
        const allVideos: IVideo[] = await Video.find()

        res.status(202).json({ message: "new Video as been added ", blog: updatedVideo, blogs: allVideos })
        // console.log("new")

    } catch (error) {
        console.log(error)
    }
}

export const getVideoId = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params: { id } } = req;
        const video: IVideo | null = await Video.findById({ _id: id })
        res.status(202).json({ message: "found", blog: video })
    } catch (error) {
        console.log(error)
    }
}


export const deleteVideo = async (req: Request, res: Response): Promise<void> => {
    try {
        const delete_video: IVideo | null = await Video.findByIdAndRemove(req.params.id)
        const allVideos: IVideo[] = await Video.find()
        res.status(200).json({ message: "Video Deleted", blog: delete_video, blogs: allVideos })

    } catch (error) {
        console.log(error)
    }
}