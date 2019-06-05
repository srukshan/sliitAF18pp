package com.sliit.cal.model;

import org.springframework.data.annotation.Id;

public class Subject {
	@Id
	private String _id;
	private String name;
	private int amount;
	private String[] courseIds;
	
	public Subject() {}

	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String[] getCourseIds() {
		return courseIds;
	}

	public void setCourseIds(String[] courseIds) {
		this.courseIds = courseIds;
	}
	
	
}
