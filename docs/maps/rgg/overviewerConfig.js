var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "world": "world",
            "north_direction": 0,
            "name": "Daytime Render",
            "showlocationmarker": true,
            "path": "day",
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "base": "",
            "isOverlay": false,
            "last_rendertime": 1596700579,
            "maxZoom": 8,
            "defaultZoom": 1,
            "zoomLevels": 8
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "compass": true,
            "overlays": true,
            "mapType": true,
            "zoom": true,
            "spawn": true,
            "pan": true,
            "coordsBox": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1596700963"
    }
};
