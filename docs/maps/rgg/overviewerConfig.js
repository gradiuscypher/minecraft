var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "mapDivId": "mcmap",
        "tileSize": 384,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "name": "Daytime Render",
            "imgextension": "png",
            "world": "world",
            "bgcolor": "#1a1a1a",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "north_direction": 0,
            "minZoom": 0,
            "isOverlay": false,
            "base": "",
            "last_rendertime": 1594198580,
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ]
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "controls": {
            "pan": true,
            "zoom": true,
            "coordsBox": true,
            "spawn": true,
            "mapType": true,
            "compass": true,
            "overlays": true
        },
        "cacheTag": "1594198993",
        "north_direction": "lower-left"
    }
};
