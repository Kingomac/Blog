export default interface MetaTags {
title?: string;
description: string;
keywords: string[];
robots?: "" | "index" | "index,follow";
language?: string;
author?: string;

ogType?: "website" | "video" | "music" | "article" | "tutorial" | string;
ogUrl?: string;
ogTitle?: string;
ogDescription?: string;
ogImage?: string;

xUrl?: string;
xTitle?: string;
xDescription?: string;
xImage?: string;
}
