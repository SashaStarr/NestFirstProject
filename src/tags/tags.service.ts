import { Injectable } from '@nestjs/common';
import { TagEntity } from './tags.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {
    constructor(@InjectRepository(TagEntity) private readonly tagRepository: Repository<TagEntity>) {}

    async getAllTags(): Promise<TagEntity[]> {
        return await this.tagRepository.find();
    }
}