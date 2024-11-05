import { Injectable } from "@angular/core";

@Injectable()
class FileSystemService {
    structure: any = [
        {
            Name: 'downloads',
            Type: 'folder',
            Content: [
                {
                    Name: 'practice.js',
                    Type: 'file',
                    Content: ''
                }
            ],
            metaData: null
        },
        {
            Name: 'documents',
            Type: 'folder',
            Content: [
                {
                    Name: 'practice.js',
                    Type: 'file',
                    Content: ''
                }
            ],
            metaData: null
        }
    ];
}