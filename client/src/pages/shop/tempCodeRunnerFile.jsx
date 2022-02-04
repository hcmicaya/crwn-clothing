this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});