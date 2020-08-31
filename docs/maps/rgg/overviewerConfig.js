var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384
    },
    "tilesets": [
        {
            "imgextension": "png",
            "world": "world",
            "name": "Daytime Render",
            "maxZoom": 8,
            "isOverlay": false,
            "showlocationmarker": true,
            "last_rendertime": 1598871379,
            "poititle": "Markers",
            "base": "",
            "path": "day",
            "minZoom": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "north_direction": 0,
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a"
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1598871767",
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "zoom": true,
            "compass": true,
            "spawn": true,
            "mapType": true
        }
    }
};
