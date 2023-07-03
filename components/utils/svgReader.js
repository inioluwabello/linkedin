
import path from 'path';
import { promises as fs } from 'fs';

 svgReader = async(svg) => {
    const svgDirectory = path.join(process.cwd(), 'public/images/svg');
    const content = await fs.readFile(svgDirectory + '/' + svg + ".svg", 'utf-8');
    return content;
}

export default fileReader;