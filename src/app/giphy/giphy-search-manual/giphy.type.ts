export interface Giphy{
 id: string;
 url: string;
 images: Images[]   
}

export interface Images{
    fixed_height: Fixed;
}

export interface Fixed{
    url: string;
    
}