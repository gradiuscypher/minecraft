var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png"
        }
    },
    "tilesets": [
        {
            "imgextension": "png",
            "zoomLevels": 10,
            "world": "Core01",
            "isOverlay": false,
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "showlocationmarker": true,
            "last_rendertime": 1596905880,
            "north_direction": 0,
            "name": "Daytime Render",
            "poititle": "Markers",
            "maxZoom": 10,
            "path": "day"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "cacheTag": "1596906082",
        "controls": {
            "pan": true,
            "mapType": true,
            "overlays": true,
            "compass": true,
            "zoom": true,
            "coordsBox": true,
            "spawn": true
        },
        "debug": true,
        "north_direction": "lower-left"
    }
};
