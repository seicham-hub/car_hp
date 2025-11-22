export enum ContentType {
    PHILOSOPHY = 'PHILOSOPHY',
    PRODUCT = 'PRODUCT',
    CAMPAIGN = 'CAMPAIGN'
}

export interface GeminiResponse {
    text: string;
}

export interface NavItem {
    label: string;
    href: string;
}
