var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "defaultZoom": 1,
            "name": "Daytime Render",
            "poititle": "Markers",
            "imgextension": "png",
            "last_rendertime": 1598957880,
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "path": "day",
            "isOverlay": false,
            "minZoom": 0,
            "world": "Core01",
            "north_direction": 0,
            "showlocationmarker": true,
            "base": "",
            "bgcolor": "#1a1a1a",
            "center": [
                80,
                96,
                192
            ]
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "zoom": true,
            "mapType": true,
            "coordsBox": true,
            "pan": true,
            "spawn": true,
            "overlays": true
        },
        "cacheTag": "1598958086"
    }
};
