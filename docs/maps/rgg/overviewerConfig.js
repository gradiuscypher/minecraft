var overviewerConfig = {
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "spawn": true,
            "overlays": true,
            "zoom": true
        },
        "cacheTag": "1596405763"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "base": "",
            "isOverlay": false,
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "minZoom": 0,
            "imgextension": "png",
            "maxZoom": 8,
            "zoomLevels": 8,
            "north_direction": 0,
            "poititle": "Markers",
            "path": "day",
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "last_rendertime": 1596405379
        }
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png"
        },
        "tileSize": 384,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    }
};
