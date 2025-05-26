import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "@/_utils/article";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})
