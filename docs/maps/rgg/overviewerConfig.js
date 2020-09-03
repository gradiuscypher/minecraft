var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "minZoom": 0,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 8,
            "base": "",
            "isOverlay": false,
            "poititle": "Markers",
            "north_direction": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "path": "day",
            "world": "world",
            "center": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "maxZoom": 8,
            "name": "Daytime Render",
            "showlocationmarker": true,
            "last_rendertime": 1599152179
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1599152570",
        "debug": true,
        "controls": {
            "spawn": true,
            "pan": true,
            "overlays": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true,
            "mapType": true
        }
    }
};
