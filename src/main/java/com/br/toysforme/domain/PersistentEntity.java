package com.br.toysforme.domain;

import java.io.Serializable;

public interface PersistentEntity<T extends Serializable> {
	
	public Integer getId();
}
