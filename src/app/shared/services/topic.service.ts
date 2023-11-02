import { Injectable } from '@angular/core';
import { Topic } from '../models/topic.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private topics: Topic[] = [
    new Topic(1, "Databases", "Efficient data storage and manipulation using queries in database management systems.", "#1598A3"),
    new Topic(2, "Data Engineering", "Collect, store, process, and manage data efficiently.", "#E99330"),
    new Topic(3, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools.", "#4AB551")
  ]

  public getTopics(): Topic[] {
    return this.topics.slice();
  }
}
