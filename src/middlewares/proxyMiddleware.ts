import { Request, Response, NextFunction } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

export const proxyMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const target = getTargetServer(req.path);

    if (!target) {
      return next();
    }

    const proxy = createProxyMiddleware({
      target, 
      changeOrigin: true, 
      pathRewrite: { [`^${req.path}`]: '' }, 
    });
  
    proxy(req, res, next);
};

function getTargetServer(path: string) {
    return 'http://google.com/';
}
