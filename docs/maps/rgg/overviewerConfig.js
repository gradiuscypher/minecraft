var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "showlocationmarker": true,
            "path": "day",
            "defaultZoom": 1,
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "maxZoom": 8,
            "name": "Daytime Render",
            "imgextension": "png",
            "base": "",
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "world": "world",
            "last_rendertime": 1597028179,
            "poititle": "Markers"
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "compass": true,
            "overlays": true,
            "mapType": true,
            "zoom": true,
            "coordsBox": true,
            "pan": true
        },
        "cacheTag": "1597028563",
        "debug": true
    }
};
