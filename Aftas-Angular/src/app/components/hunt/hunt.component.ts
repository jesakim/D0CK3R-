import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompetitionModule } from '../../entities/competition/competition.module';
import { MemberModule } from '../../entities/member/member.module';
import {FishModule} from "../../entities/fish/fish.module";
import {CompetitionService} from "../../services/competitions/competition.service";
import {MemberService} from "../../services/member/member.service";
import {FishService} from "../../services/fish/fish.service";
import {Observable} from "rxjs";
import {HuntService} from "../../services/hunt/hunt.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-hunt',
  templateUrl: './hunt.component.html',
  styleUrls: ['./hunt.component.css']
})
export class HuntComponent implements OnInit {
  huntForm : FormGroup;
  competitions: CompetitionModule[] = [];
  members!: Observable<Array<MemberModule>> ;
  fishes!:Observable<Array<FishModule>>;
  selectedCompetitionId!:number;

  constructor(private formBuilder: FormBuilder,
              private huntService: HuntService,
              private competitionService: CompetitionService,
              private memberService: MemberService,
              private fishService: FishService) {
    this.huntForm = this.formBuilder.group({
      competitionId: [null, Validators.required],
      memberId: [null, Validators.required],
      fishId: [null, Validators.required],
      averageWeight: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.competitionService.getActiveComps().subscribe(
      (competitions) => {
      this.competitions = competitions;
    });
    this.fishes=this.fishService.getFishes();
  }
  onCompetitionChange() {
    if (this.selectedCompetitionId !== null) {
      this.members=this.memberService.getMembersByCompetitions(this.selectedCompetitionId);
    }

  }
  onSubmit() {
    if (this.huntForm.valid) {
      const huntData = this.huntForm.value;
      this.huntService.addHunt(huntData).subscribe(
        () => {
            Swal.fire({
            title: "Good job!",
            text: "Hunt added successfully",
            icon: "success"
          });
          this.huntForm.reset();
        },
        (error) => {
          console.error('Error adding hunt', error);
        }
      );
    }
  }
}
