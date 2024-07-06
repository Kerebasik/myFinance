import {Request} from "express";

type RequestQuery<T> = Request<{}, {}, {}, T>;
type RequestBody<T> = Request<{}, {}, T, {}>;

export {
    RequestQuery,
    RequestBody
}