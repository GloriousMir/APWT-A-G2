import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoticeDto } from '../dto/noticeDto.dto';
import { ExpertNotice } from '../entitys/expertNotice.entity';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(ExpertNotice)
    private expertRepo: Repository<ExpertNotice>,
  ) {}

  getNotice(): any {
    return this.expertRepo.find();
  }

  insertNotice(noticedto: NoticeDto): any {
    const notice = new ExpertNotice();
    notice.subject = noticedto.subject;
    notice.Details = noticedto.Details;
    return this.expertRepo.save(noticedto);
  }

  updateNotice(noticedto, id): any {
    return this.expertRepo.update(id, noticedto);
  }

  updateNoticeById(noticedto, id): any {
    return this.expertRepo.update(id, noticedto);
  }

  deleteNotice(id): any {
    return this.expertRepo.delete(id);
  }
}