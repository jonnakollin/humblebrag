export interface BlogPost {
    title: string;
    featuredImages: any;
    publishedDate: string;
    category: string;
    content: string;
    images: any
}

export interface BlogPosts {
    posts: BlogPost[]
}

export interface Page {
    title: string;
    slug: string;
    image: any;
    content: string;
}

export interface Asset {
    fields: {
        file: {
            url: string;
        };
    };
}