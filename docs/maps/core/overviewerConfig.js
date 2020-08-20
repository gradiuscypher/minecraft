var overviewerConfig = {
    "CONST": {
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "north_direction": 0,
            "base": "",
            "imgextension": "png",
            "maxZoom": 10,
            "last_rendertime": 1597946280,
            "defaultZoom": 1,
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "zoomLevels": 10,
            "path": "day",
            "world": "Core01",
            "isOverlay": false,
            "showlocationmarker": true,
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "spawn": [
                80,
                96,
                192
            ]
        }
    ],
    "map": {
        "cacheTag": "1597946486",
        "controls": {
            "pan": true,
            "overlays": true,
            "mapType": true,
            "spawn": true,
            "compass": true,
            "coordsBox": true,
            "zoom": true
        },
        "debug": true,
        "north_direction": "lower-left"
    }
};
