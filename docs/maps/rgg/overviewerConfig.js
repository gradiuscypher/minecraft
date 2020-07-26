var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "image": {
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "base": "",
            "path": "day",
            "name": "Daytime Render",
            "poititle": "Markers",
            "zoomLevels": 8,
            "last_rendertime": 1595796979,
            "isOverlay": false,
            "world": "world",
            "showlocationmarker": true,
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "defaultZoom": 1,
            "north_direction": 0,
            "bgcolor": "#1a1a1a"
        }
    ],
    "map": {
        "cacheTag": "1595797362",
        "controls": {
            "coordsBox": true,
            "overlays": true,
            "mapType": true,
            "compass": true,
            "pan": true,
            "zoom": true,
            "spawn": true
        },
        "debug": true,
        "north_direction": "lower-left"
    }
};
