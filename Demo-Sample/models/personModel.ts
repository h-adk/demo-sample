/// <reference path="../node_modules/nodedata/datatypes/mongoose.ts" />

import {document} from 'nodedata/decorators/document'; 
import {field} from 'nodedata/decorators/field'; 
import {IUser} from './user.ts';
import {Types} from 'mongoose';
import {Strict} from 'nodedata/enums/document-strict';

@document({ name: 'persons', strict: Strict.true })
export class PersonModel {
    @field({ primary: true, autogenerated: true })
    _id: Types.ObjectId;

    @field({searchIndex : true})
    name: string;

    @field()
    email: string;

    @field({searchIndex : true})
    age: number;

    @field()
    lastname: string;

    _links: any;
    
    constructor(userDto: IUser) {
        this._links = {};
        this._id = <any>userDto._id;
        this.name = userDto.name;
    }
}

export default PersonModel;