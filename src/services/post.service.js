import axios from "axios";

export const postService = {
    getByUserId:(id)=>axiosService.get(`${urls.posts}?userId=${id}`)
}
