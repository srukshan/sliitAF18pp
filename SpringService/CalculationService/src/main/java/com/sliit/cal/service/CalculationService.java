package com.sliit.cal.service;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sliit.cal.model.Subject;

@RestController
@RequestMapping("calc/")
public class CalculationService {
	@PostMapping("cprice/")
	public int GetCoursePrice(@RequestBody List<Subject> subjects) {
		int totPrice = 0;
		for (Subject subject : subjects) {
			totPrice += subject.getAmount();
		}
		return totPrice;
	}
}
