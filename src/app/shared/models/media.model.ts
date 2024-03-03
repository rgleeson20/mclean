export interface MediaItem {
    projectId: string;
    src: string;
    thumbSrc: string;
    includeInGallery?: boolean;
    type: MediaType;
}

export interface Image extends MediaItem {  
    alt: string;
}

export interface Video extends MediaItem {
    title: string;
}

export enum MediaType {
    None = 0,
    Image = 1,
    Vimeo = 2
}