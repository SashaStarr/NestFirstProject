import { Controller, Get } from '@nestjs/common';
import { TagsService } from '@app/tags/tags.service';
import { TagEntity } from './tags.entity';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsProvider: TagsService) {}

    @Get()
    async getAllTags(): Promise<TagEntity[]> {
        return await this.tagsProvider.getAllTags();
    }
}